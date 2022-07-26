const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title:{type: String, required:true,unique:true},
        desc:{type: String, required:true,unique:true},
        photo:{type: String, required:true,},
        username:{type: String, required:true},
        
        categories:{type: Array, required:true}
    },{
        timestamps: true,
        versionKey: false
    }
);

const PostModel = mongoose.model("PostModel",postSchema);
module.exports = PostModel