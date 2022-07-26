
const router = require("express").Router();

const userModel = require("../models/userModel");
const postModel = require("../models/postModel");
const bcrypt = require("bcrypt")




//Update 

router.put('/:id', async(req, res)=>{

    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
    try{
        const updatedUser = await User.findByIDAndUpdate(req.params.id,{
            $set: req.body,
           
        },{ new: true});
       res.status(200).json(updatedUser)
  
    }catch(err){
        res.status(500).json(err);
    }
    
}else{
    req.status(401).json("You can update only your account")
}

})

//Delete

router.delete('/:id', async(req, res)=>{

    if(req.body.userId === req.params.id){
        
       try{
        const user  = await userModel.findById(req.params.id);

       
    try{
        await postModel.deleteMany({username: user.username})

        await userModel.findByIdAndDelete(req.params.id)
       
       res.status(200).json("User has been deleted !!")
  
    }catch(err){
        res.status(500).json(err);
    }

  }catch(err){
        res.status(404).json("User is not found !!")
  }

    
  }else{
    req.status(401).json("You can delete only your account")
   }

});

// After deleted we can get one user,fetching user by his ID.

//GET

router.get('/:id', async(req, res)=>{

    try{
        const user =  await userModel.findById(req.params.id);
        const {password, ...others} = user._doc
    }catch(err){
         
        res.status(500).json(others)
    }
})




module.exports = router;