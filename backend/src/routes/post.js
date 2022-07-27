
const router = require("express").Router();

const userModel = require("../models/userModel");
const postModel = require("../models/postModel");




//CREATE POST

router.post('/', async(req, res)=> {
    const newPost = new postModel(req.body)

    try{
        const savedPost = await newPost.save();

        res.status(200).json(savedPost);

    }catch(err){
         
       return res.status(500).json(err)
        // return res.status(500).send({message:err.message})
    }
});

//UPDATE POST

router.put("/:id", async (req, res) => {
    try {
        
      const post = await postModel.findById(req.params.id);
      if (post.username === req.body.username) {

        try {
           
          const updatedPost = await postModel.findByIdAndUpdate(req.params.id,{
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
         return res.status(500).json(err);
        }
      } else {
       return res.status(401).json("You can update only your post!");
      }
    } catch (err) {
     return res.status(500).json(err);
    }
  });

//DELETE  POST
router.delete('/:id', async(req, res)=>{
    
    try{
        const post = await postModel.findById(req.params.id);
        if(post.username === req.body.username) {

        try{
           await postModel.findByIdAndDelete()

                 res.status(200).json("Post has been deleted")

             }catch(err){
             return res.status(500).json(err)
        }
    
       } else{

            return res.status(401).json("You can delete only your post")
        }
    }catch(err){
       return res.status(500).json(err)
     }
    
});

// //GET POST

router.get('/:id', async(req, res)=>{

    try{
        const post =  await postModel.findById(req.params.id);
        res.status(200).json(post)
    }catch(err){
         
       return res.status(500).json(err)
    }
});

// // GET ALL POSTS
// //Queries will be used

router.get('/', async(req, res)=>{
       const username = req.query.user
       const catName = req.query.category
       // above both line generate query--> ?user=peter  or ?category=music(it is just a example)
        //catName--> categoryName

    try{
        let posts;
        if(username){
            posts = await postModel.find({username:username})
        }else if(catName){
            posts = await postModel.find({categories:{
               $in:[catName] 
            }})
        }else{
            posts = await postModel.find();
        }
        res.status(200).json(posts);
        
    }catch(err){
         
       return res.status(500).json(others)
    }
});



module.exports = router;
