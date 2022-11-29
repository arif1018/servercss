const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { find } = require("../models/userModel")

const addUser = asyncHandler(async(req, res)=>{

    const {userEmail, userPassword} = req.body

    if(!userEmail || !userPassword){
        res.status(401)
        throw new Error("Please Enter Complete User Data")
    }

    const alreadyExist =  await User.findOne({userEmail})

    if(alreadyExist){
        res.status(400)
        throw new Error("User Already Exist")
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10)

    const user = await User.create({userEmail, userPassword: hashedPassword})

    res.status(200).json({
        success: true,
        token:getToken(user._id),
        user:user.userEmail
    })
})

const loginUser = asyncHandler(async(req, res)=>{
    const {userEmail, userPassword} = req.body

    if(userEmail === ""){
        res.status(401)
        throw new Error("User Name is Empty")
    }else{
        if(userPassword === ""){
            res.status(401)
            throw new Error("User Password is Empty")    
        }
    }

    const user = await User.findOne({userEmail})

    if(user && await bcrypt.compare(userPassword, user.userPassword)){
        res.status(200).json({
            success:true,
            user: user.userEmail,
            token:getToken(user._id),
        })
    }else{
        throw new Error("Invailid Credential!.")
    }
})


const getAllUsers = asyncHandler(async(req, res)=>{
    const users = await User.find()

    if(users.length > 0){
        res.status(200).json({users})
    }else{
        res.status(401)
        throw new Error("Users Collection Empty")

    }
})

const getToken = (id)=>{
    console.log(process.env.JWT_SECRET)
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"30d"})
}
module.exports = {getAllUsers, addUser, loginUser}
