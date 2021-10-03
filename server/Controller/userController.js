const userModel = require("../Model/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const saltSounds = 12;
exports.singUp = async (req, res) => {
   const password = await bcrypt.hash(req.body.password, saltSounds);
   const user = new userModel({
      userName: req.body.userName,
      password: password,
      Email: req.body.Email,
      realNameAndSurname: req.body.realNameAndSurname
   });
   await user.save().then(() => {
      res.status(201);
   }).catch(error => {
      console.log(error);
      res.status(400);
   });
}
exports.login = async (req, res, next) => {
   try {
      const user = await userModel.findOne({ userName: req.body.username });
      if (!user) return res.status(401).send({ message: "wrong name" });
      if (bcrypt.compareSync(req.body.password, user.password)) {
         const token = jwt.sign({ _id: user._id, name: user.userName }, process.env.JWT_KEY);
         res.cookie("x", token, { httpOnly: true });
         res.cookie("user_IX", {_id:user._id}, { httpOnly: false });
         res.status(200).json({ user: { _id:user._id,name: user.userName, realNameAndSurname: user.realNameAndSurname }, message: "giriş oldu" });
      } else {
         res.send({ message: "wrong password" });
      }
   } catch (error) {
      next([500, error]);
   }
}

exports.isLoggedIn = (req, res, next) => {
   const token = req.cookies.x;
   jwt.verify(token, process.env.JWT_KEY, (error, decodedToken) => {
      if (error){
         next([401, "Invalid token"]);
      } 
      userModel.findById(decodedToken._id).then((user)=>{
         res.status(200).json({ user: { name: user.userName, realNameAndSurname: user.realNameAndSurname }});
      }).catch(error=>{
         console.log(error);
         res.status(401).json({message:"Hatalı"});
      });
   });
}


exports.logout = (req, res, next) => {
   res.clearCookie("x");
   res.status(200).json({ message: "çıkış yapıldı " });
}