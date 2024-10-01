const mongoose=require('mongoose') 
const reviewSchema=mongoose.Schema(
    {
        name:{type:String , required:true},
        rating:{type:Number , required:true},
        comment:{type:String , required:true},
        user:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"User"}
    }
);
const productSchema=mongoose.Schema(
    {
        name:{type:String , required:true},
        image:{type:String },
        description:{type:String  },
       rating:{type:Number, default:0},
        price:{type:Number , default:0},
        countInStock:{type:Number , default:0},
        numReview:{type:Number , default:0},

        reviews:[reviewSchema],
    }
);

module.exports=mongoose.model("product",productSchema)