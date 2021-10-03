const express = require("express");
const userController=require("../Controller/userController.js");
const router = express.Router();
const AuthJwt = require("../Middleware/AuthJwt.js");

router.post("/register",userController.singUp);

router.post("/login",userController.login);

router.post("/is_logged_in",AuthJwt,userController.isLoggedIn);

router.post("/logout",userController.logout);


module.exports=router;
