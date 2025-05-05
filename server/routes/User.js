const express=require("express");
const router=express.Router();

const {
    login,
    
    sendOTP,
    changePassword,
    signUp,
}=require("../controllers/Auth");
const {resetPasswordToken,resetPassword,}=require("../controllers/ResetPassword");

const {auth}=require("../middlewares/auth");

// Authentication routes

//routes for user login
router.post("/login",login)

//Route for signup
router.post("/signup",signUp)

//routes for sending otp to user email
router.post("/sendotp",sendOTP)

// Routes for changing the password
router.post("/changepassword",auth,changePassword)


//Reset password

//router for generating a reset password token
router.post("/reset-password-token",resetPasswordToken)

//Route the resetting user password after verification
router.post("/reset-password",resetPassword)

//Export the router for use in the main application
module.exports=router


