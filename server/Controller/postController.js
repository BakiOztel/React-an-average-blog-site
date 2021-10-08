const PostModel = require("../Model/PostModel.js");
const UserModel = require("../Model/UserModel.js");
const jwt = require("jsonwebtoken");
exports.createPost = async (req, res, next) => {
    const user = await UserModel.findById(req.decodedToken._id)
    const Post = new PostModel({
        userId: req.decodedToken._id,
        img: req.file.filename,
        explanation: req.body.comment
    });
    // user.post
    try {
        await Post.save();
        user.post = [...user.post, Post._id];
        await user.save();
        res.status(201).json(Post);
    } catch (err) {
        res.status(409).json({ message: error.message });
    }
}
exports.getPost = async (req, res) => {
    try {
        const data = await PostModel.find().populate({ path: "userId", select: "userName profileImg" }).populate({ path: "comments.user_id",select:"userName" });

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "bulunamadı" });
    }
}

exports.getProfilePost = async (req, res) => {

    await UserModel.findById(req.decodedToken._id).populate("post").exec(function (err, post) {
        if (err) {
            res.status(400).json({ message: "error" });
        } else {
            res.status(200).json(post.post);
        }
    });
}

exports.changeProfileImg = async (req, res) => {
    await UserModel.findOneAndUpdate({ _id: req.decodedToken._id }
        , { $set: { profileImg: req.file.filename } },
        (error, data) => {
            if (error) {
                console.log(error);
            } else {

            }
        }
    );
}

exports.postComment = async (req, res) => {
    const comment={
        user_id:req.decodedToken._id,
        comment:req.body.message
    }
    await PostModel.findOneAndUpdate({ _id: req.body.postId }, { $addToSet: { comments:comment } },
        (error, data) => {
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        }
    );
}