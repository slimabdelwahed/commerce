



//userName  abdelwahedslim0
//password  ONS0ZQFu05cSKygK

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const PORT = process.env.PORT || 3000;

const databaseSeeder = require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require('./routes/Order');
const cors = require('cors');
console.log("JWT Secret:", process.env.JWT_SECRET);

// Connect DB
mongoose.connect(process.env.MONGOOSEDB_URL)
    .then(() => {
        console.log("DB connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("DB connection error:", err);
    });

    app.use(cors({
        origin: '*', // Pour autoriser toutes les origines
        credentials: true, // Si vous gérez des cookies ou des authentifications
      }));

// Middleware for JSON parsing
app.use(express.json());

// Database seeder route
app.use('/api/seed', databaseSeeder);

// Routes for users
app.use('/api/Users', userRoute);

// Routes for products
app.use('/api/Product', productRoute);

// Routes for orders
app.use('/api/Order', orderRoute);
