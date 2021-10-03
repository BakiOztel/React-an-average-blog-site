const PostModel=require("../Model/PostModel.js");
const UserModel=require("../Model/UserModel.js");
const jwt = require("jsonwebtoken");
exports.createPost= async (req,res,next)=>{
    const user = await UserModel.findById(req.decodedToken._id)
    const Post = new PostModel({
        userId:req.decodedToken._id,
        img:req.file.filename,
        explanation:req.body.comment
    });
    // user.post
    try {
        await Post.save();
        user.post=[...user.post,Post._id];
        await user.save();
        res.status(201).json(Post);
        console.log("oldu");
    } catch (err) {
        res.status(409).json({ message: error.message });
    }
}
exports.getPost=async (req,res)=>{
    try{
        const data = await PostModel.find();
        
        res.status(200).json(data);
    }catch(error){
        console.log("YARRAM");
        res.status(400).json({message:"bulunamadı"});
    }
}

exports.getProfilePost= async (req,res)=>{

    await UserModel.findById(req.decodedToken._id).populate("post").exec(function(err,post){
        if (err) {
            res.status(400).json({message:"bilinmeyen hata"});
        }else{
            res.status(200).json(post.post);
        }
    });
}