const express=require('express');
const productRoute=express.Router();
const AsyncHandler = require('express-async-handler');
const Product=require('../models/Product')


productRoute.get("/",AsyncHandler(async(req,res)=>{
    const products=await Product.find({});
    res.json(products);
}));

productRoute.get("/:id",AsyncHandler(async(req,res)=>{
    const products=await Product.findById(req.params.id);
    if(Product){
res.json(Product);
    }else{
        res.status(404);
    throw new Error("User not found"); 
    }
}));

module.exports=productRoute;