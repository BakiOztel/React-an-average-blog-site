const router=require("express").Router();
const postControllers=require("../Controller/postController.js");
const multer= require("multer");
const Auth=require("../Middleware/AuthJwt.js");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+"-"+file.originalname)
  }
})
const upload = multer({ storage: storage });

router.post("/post",upload.single("image-file"),Auth,postControllers.createPost);

router.get("/getPost",Auth,postControllers.getPost);

router.get("/getProfilePost",Auth,postControllers.getProfilePost)
module.exports=router;