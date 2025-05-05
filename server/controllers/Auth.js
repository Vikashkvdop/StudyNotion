const User=require("../models/User");
const OTP=require("../models/OTP");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const nodemailer = require("nodemailer"); // For sending email (you can use a different email service if needed)
const otpGenerator = require('otp-generator');
const Profile = require('../models/Profile');
const { emailVerificationTemplate } = require("../mail/templates/emailVerficationTemplate");
const { passwordUpdate } = require('../mail/templates/passwordUpdate');
const mailSender=require("../utils/mailSender");
require("dotenv").config();

//Send OTP

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // 1. Check if user already exists
    const checkUserPresent = await User.findOne({ email });
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User already registered",
      });
    }

    // 2. Generate OTP
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);

    // 3. Ensure OTP is unique
    let existingOtp = await OTP.findOne({ otp });
    while (existingOtp) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      existingOtp = await OTP.findOne({ otp });
    }

    // 4. Save OTP to database
    await OTP.create({ email, otp });

    // 5. Send Email with OTP
    await mailSender(
      email,
      "StudyNotion - Verify Your Email",
      emailVerificationTemplate(otp)
    );

    // 6. Respond success
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};



//signUp

exports.signUp = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp
        } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Password and confirmPassword do not match',
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User is already registered',
            });
        }

        // Find the most recent OTP for the user
        const recentOtpRecord = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log("Recent OTP: ", recentOtpRecord);

        if (recentOtpRecord.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'OTP not found',
            });
        }
       // console.log("OTP generated and saved:", otpBody);


        // Check if OTP matches
        if (recentOtpRecord[0].otp !== otp) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP',
            });
        }

        // Optional: Check for OTP expiration
        if (recentOtpRecord[0].expiresAt && recentOtpRecord[0].expiresAt < Date.now()) {
            return res.status(400).json({
                success: false,
                message: 'OTP has expired',
            });
            
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create profile with placeholder values
        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        });

        // Create user
        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password: hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        return res.status(200).json({
            success: true,
            message: 'User registered successfully',
            user,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again",
        });
    }
};

//Login
exports.login=async (req,res)=>{
    try{
        //get data from req body
        const {email,password}=req.body;
        // validation data
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:'All feilds are required please try again',
            });
        }
        //user check exist or not
        const user=await User.findOne({email}).populate("additionalDetails");
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User is not registered Please signup first',
            });
        }

        //generate JWT after password matching
        if(await bcrypt.compare(password,user.password)){
            const payload={
                email:user.email,
                id:user._id,
                accountType:user.accountType,
            }
            const token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user.token=token;
            user.password=undefined;

            //create cookie and send response
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in Successfully",
            })
        }else{
            return res.status(401).json({
                success:false,
                message:'Password is incorrect',
            }); 
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure , Please try again',
        });
    }
};


//Change Password
// exports.changePassword=async(req,res)=>{
//     //get data from req body
//     //get old password newpassword confirmpassword
//     //validation
//     //update pwd in DB
//     //send mail-password updated
//     //return response
// }





exports.changePassword = async (req, res) => {
  try {
    // Get user data from req.user
    const userDetails = await User.findById(req.user.id)

    // Get old password, new password, and confirm new password from req.body
    const { oldPassword, newPassword } = req.body

    // Validate old password
    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    )
    if (!isPasswordMatch) {
      // If old password does not match, return a 401 (Unauthorized) error
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" })
    }

    // Update password
    const encryptedPassword = await bcrypt.hash(newPassword, 10)
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    )

    // Send notification email
    try {
      const emailResponse = await mailSender(
        updatedUserDetails.email,
        "Password for your account has been updated",
        passwordUpdate(
          updatedUserDetails.email,
          `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        )
      )
      console.log("Email sent successfully:", emailResponse.response)
    } catch (error) {
      // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
      console.error("Error occurred while sending email:", error)
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      })
    }

    // Return success response
    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" })
  } catch (error) {
    // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
    console.error("Error occurred while updating password:", error)
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    })
  }
}

