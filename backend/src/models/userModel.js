const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:{type: String, required:true,unique:true},
        email:{type: String, required:true,unique:true},
        password:{type: String, required:true},
        profilePic:{type: String, default:""}
    },{
        timestamps: true,
        versionKey: false
    }
);

const UserModel = mongoose.model("UserModel",userSchema);
module.exports = UserModel





