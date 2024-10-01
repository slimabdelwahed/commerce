const express=require('express');
const productRoute=express.Router();
const AsyncHandler = require('express-async-handler');
const Product=require('../models/Product')

productRoute.post('/Products',async(req,res)=>{
    try{const{name,price,description,image}=req.body;
if(!name || !price){
    return res.status(400).json({message:"Name and Price are required"});
}
const newProduct=new Product({
name,
price,
description,
image
});
await newProduct.save();
res.status(201).json(newProduct);
}catch(error){
    res.status(500).json({message:"Server error",error:error.message});
}
});

productRoute.get("/api/Products",AsyncHandler(async(req,res)=>{
    
    
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