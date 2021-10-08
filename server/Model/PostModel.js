const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    explanation :{
        type:String
    },
    comments: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users",
                required: true
            },
            comment: {
                type: String
            }
        }
    ],
    img:{
        type:String
    },

});

module.exports=mongoose.model("post",PostSchema);