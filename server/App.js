const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const {join}=require("path")
require("dotenv").config();

const App=express();

//Router
const userRouter=require("./Router/userRouter.js");
const postRouter=require("./Router/postRouter.js");


//Middleware
App.use(cors({credentials: true, origin:true}));
App.use(express.static(join(__dirname+"/img")));
App.use(express.urlencoded({extended:true}));
App.use(express.json());
App.use(cookieParser());
App.use(userRouter);
App.use(postRouter);

const PORT=process.env.PORT || 5000;

//Connect DataBase
mongoose.connect(process.env.DATA_BS,{useNewUrlParser:true,useFindAndModify:true,useUnifiedTopology:true}).then(()=>{
    App.listen(PORT,()=> console.log(`Start ${PORT}`));
}).catch(err=>{
    console.log(err);
})


