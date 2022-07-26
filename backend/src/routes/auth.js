
// const express = require("express");
// const router = express.Router();
// or
const router = require("express").Router();

const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt")

//Register
router.post('/register',async(req,res)=>{

    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user  = await newUser.save();
        res.status(200).json(user);

    }catch(err){
         
        res.status(500).json(err)
        // return res.status(500).send({message:err.message})
    }
});


//Login
// again post, because in login we will have to send our info, to match
// with registration i'd and pass
 
router.post('/login', async(req, res)=>{
    try{
        const user  = await UserModel.findOne({username: req.body.username})
        
        //  //if(!user)
        // !user && res.status(400).json("Email or Password is Wrong !!")
       
        // const validated = await bcrypt.compare(req.body.password, user.password);
        // // if(!validated) means after comparing
        // !validated && res.status(400).json("Email or Password is Wrong !!")
        if(!user){
            return res.status(400).json("Email or Password is Wrong !!")
        }

         const validated = await bcrypt.compare(req.body.password, user.password);

         if(!validated){
            return res.status(400).json("Email or Password is Wrong !!")
         }

        
        const {password, ...others} = user;
         // if all is well then return 
         res.status(200),json(others);
  
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;