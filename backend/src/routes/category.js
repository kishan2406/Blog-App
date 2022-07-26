

const router = require("express").Router();
const categoryModel = require("../models/categoryModel");

router.post('/', async(req, res)=>{
    const newCat = new categoryModel(req.body);

    try{
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)

    }catch(err){
       return res.status(500).json(err)
    }
})

router.get('/', async(req, res)=>{
    
    try{
        const cats = await categoryModel.find();
        res.status(200).json(cats)

    }catch(err){
       return res.status(500).json(err)
    }
})


module.exports = router;

