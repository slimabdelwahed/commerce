/*const express=require('express');
const userRoute=express.Router();
const AsyncHandler = require('express-async-handler');
const User=require('../models/User');
const generateToken=require('../tokenGenerate');
const bcrypt = require('bcryptjs');
userRoute.post('/login',AsyncHandler(async(req,res)=>{
const {email,password}=req.body;
const user=await User.findOne({email});
if(user && (await user.matchPassword(password))) 
{
res.json({
    _id:user.id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token:generateToken(user._id),
    createdAt:user.createdAt
})
}else{ 
    res.status(401);
    throw new Error("Invalid Email or Password");
}
})
);*/

//register route
/*userRoute.post('/signup', AsyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    const existUser=await User.findOne({email});
    if(existUser){
        res.status(400);
        throw new Error("User alredy exists");
    }else{
        const user=await User.create({
            name,
            email,
            password
        });
        if(user){
res.status(201).json({
    _id:user.id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token:generateToken(user._id),
    createdAt:user.createdAt
});
        }else{
            res.status(400);
            throw new Error("Invalid User Data");  
        }
    }
})

);*/
/*const express = require('express');
const userRoute = express.Router();
const AsyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../tokenGenerate');
const bcrypt = require('bcryptjs');

userRoute.post('/login', AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            createdAt: user.createdAt,
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
}));*/
/*const express = require('express');********
const userRoute = express.Router();
const AsyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../tokenGenerate');
const bcrypt = require('bcryptjs');

userRoute.post('/login', AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    console.log(`Attempting login for email: ${email}`);
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            createdAt: user.createdAt,
        });
    } else {
        res.status(401).json({ message: "Invalid Email or Password" }); // Send a structured error response
    }
}));*/ 
const express = require('express');
const bcrypt = require('bcryptjs');
const AsyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../tokenGenerate');
const { protect } = require('../middleware/Auth');
const userRoute = express.Router();

// Route de connexion
userRoute.post('/login', AsyncHandler(async (req, res) => {
    const { email, password } = req.body;


    // Vérifier si l'utilisateur existe dans la base de données
    const user = await User.findOne({ email });
console.log('12345',user);

   
    if (user && password ==user.password) {
                 let userData={
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            createdAt: user.createdAt
        };
                return res.status(200).json({ msg: "Login success",userData })
            } 
    
        // Si l'utilisateur est trouvé et que le mot de passe est correct
       
     else {
        // Si l'email ou le mot de passe est incorrect
        res.status(401);
        throw new Error("Email ou mot de passe incorrect");
    }
}));
userRoute.post('/signup', AsyncHandler(async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const existUser = await User.findOne({ email });
        if (existUser) {
            res.status(400);
            throw new Error("User already exists");
        }

        // const hashedPassword = await bcrypt.hash(password, 10);
        console.log('789',password);
        
        const user = await User.create({
            name,
            email,
            password
        });

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt
            });
        } else {
            res.status(400);
            throw new Error("Invalid User Data");
        }
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error); // Log error details
        res.status(500).json({ message: "Erreur lors de l'inscription" });
    }
}));
// Route de profil
userRoute.get('/profile/:email', AsyncHandler(async (req, res) => {
    try {
      // Rechercher un utilisateur par email
      const user = await User.findOne({ email: req.params.email });
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Utilisateur non trouvé" });
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
      res.status(500).json({ message: "Erreur lors de la récupération du profil" });
    }
  }));
  // Route pour mettre à jour un utilisateur par email
userRoute.put('/profile/:email', AsyncHandler(async (req, res) => {
    try {
      // Rechercher un utilisateur par email
      const user = await User.findOne({ email: req.params.email });
  
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
  
      // Mise à jour des informations utilisateur
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
  
      // Vérifier si un nouveau mot de passe est fourni
      if (req.body.password) {
        user.password = req.body.password; // Assurez-vous que le middleware de hachage fonctionne
      }
  
      // Sauvegarder les nouvelles informations de l'utilisateur
      const updatedUser = await user.save();
  
      // Renvoyer les informations mises à jour
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
  
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      res.status(500).json({ message: "Erreur lors de la mise à jour du profil" });
    }
  }));
module.exports=userRoute;


