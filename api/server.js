
const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose")
const products = require("./data/Products");
dotenv.config();
const PORT=process.env.PORT|| 3000 ;

//connect DB
console.log('connected to ',process.env.MONGOOSEDB_URL);
mongoose.connect(process.env.MONGOOSEDB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("DB connection error:", err);
    });

/*api products test route
app.get("/api/products",(req,res)=>{
    const products=products;
    res.json(products);
});

app.get("/api/products/:id",(req,res)=>{
    const products=products;
    const product=products.find((product)=>product.id===req.params.id)
    res.json(product);
});*/
const databaseSeeder=require('./databaseSeeder');
const userRoute=require("./routes/User");
const productRoute=require("./routes/Product");
const orderRoute=require('./routes/Order');

app.use(express.json())

//database seeder routes
app.use('/api/seed',databaseSeeder);


// routes for users
//api/users/login
app.use('/api/users',userRoute);

//routes for products
app.use('/api/products',productRoute);

//routes for order
app.use('/api/orders',orderRoute);

app.listen(PORT || 9000,()=>{
    console.log('server listening on port ',PORT);
});



//userName  abdelwahedslim0
//password  ONS0ZQFu05cSKygK