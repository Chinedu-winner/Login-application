const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);

router.post("/register", async (req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.json({message:"User created"});
});

router.post("/login", async (req,res)=>{
    const user = await User.findOne({email:req.body.email});

    if(!user){
        return res.status(404).json({message:"User not found"});
    }

    res.json({message:"Login successful"});
});

module.exports = router;