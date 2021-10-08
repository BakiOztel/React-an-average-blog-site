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

router.post("/post",Auth,upload.single("image-file"),postControllers.createPost);

router.get("/getPost",Auth,postControllers.getPost);

router.get("/getProfilePost",Auth,postControllers.getProfilePost)

router.post("/profileImgChange",Auth,upload.single("avatar"),postControllers.changeProfileImg)

router.post("/postComment",Auth,postControllers.postComment);

module.exports=router;