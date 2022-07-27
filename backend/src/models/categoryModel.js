const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name:{type: String, required:true,unique:true},
       
     }
     ,{
        timestamps: true,
        versionKey: false
    }
);

const categoryModel = mongoose.model("categoryModel",categorySchema);
module.exports = categoryModel