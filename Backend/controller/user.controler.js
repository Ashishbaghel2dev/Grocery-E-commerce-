import { User } from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import sendEmail from "../mail/emailSend.js";
import {emailTemplate} from "../config/emailTemplates.js";
export const UserSignup = async (req, res) => {
  try {
    const { fullname, email, password, address, phone } = req.body;

    if (!fullname || !email || !password || !address || !phone) {
      return res.status(400).send({
        message:
          "User has missing fullname, email, password, phone, or address!",
        success: false,
      });
    }


    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({
        message: "User already exists, please login",
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    res.status(200).send({
      message: "User signup successful",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};



export const Userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        message: "User has missing email or password",
        success: false,
      });
    }

    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(401).send({
        message: "User not found, please signup",
        success: false,
      });
    }

    const comparePassword = await bcryptjs.compare(password, existUser.password);
    if (!comparePassword) {
      return res.status(401).send({
        message: "Password is incorrect, please check",
        success: false,
      });
    }

    const token = jwt.sign(
      { userId: existUser._id, email }, 
      process.env.SECRET_KEY, 
      { expiresIn: "7d" }
    );

    // Prepare user data to send in response (excluding password)
    const userData = {
      fullname: existUser.fullname,
      email: existUser.email,
      phone: existUser.phone,
      address: existUser.address,
      // Add other fields you want to include here
    };

    res.status(200).send({
      message: "User login successful",
      token,
      user: userData, // Send user data along with the token
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};


//updateFieldservice here


export const updateUserService = async (req, res) => {
  try {
    const userID= req.user.userId;
    console.log(userID);
    if (!userID) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing user ID.",
      });
    }

    const fieldsToUpdate = req.body;
    if (!fieldsToUpdate || Object.keys(fieldsToUpdate).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Fields are missing.",
      });
    }

    if (fieldsToUpdate.password) {
      const hashpassword = await bcryptjs.hash(fieldsToUpdate.password, 10);
      fieldsToUpdate.password = hashpassword;
    }

    const result = await User.updateOne({ _id: userID }, { $set: fieldsToUpdate });

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      message: "User updated successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update user.",
      error: error.message,
    });
  }
};





// Define the forgetPassword function
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req?.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        success: false,
        error: true,
      });
    }

    // Find the user by email
    const userEmail = await User.findOne({ email });

    if (!userEmail) {
      return res.status(404).json({
        message: "User with this email does not exist",
        success: false,
        error: true,
      });
    }
    const link = process.env.FORGET_PASSWORD_LINK ;
    // Email content
    const subject = "Forget Password";
    const htmlContent = emailTemplate(userEmail.fullname, link, userEmail._id);
    const textContent = "Click the link below to reset your password";

    // Call the sendEmail function
    const data = await sendEmail({
      sendTo: email,
      subject,
      html: htmlContent,
      text: textContent,
    });
    return res.status(200).json({
      message: "Password reset email sent successfully.",
      success: true,
      error: false,
    });
  } catch (error) {

    return res.status(500).json({
      message: "Internal server error. Please try again later.",
      success: false,
      error: true,
    });
  }
};




//updatePasswordservice here
export const updatePasswordService = async (req, res) => {
  const { id } = req.params;
  const { confirmPass, updatedPass } = req.body;
  if (!confirmPass || !updatedPass) {
    return res.status(400).json({
      message: "Both password fields are required.",
      success: false,
      error: true,
    });
  }
  if (confirmPass !== updatedPass) {
    return res.status(400).json({
      message: "Passwords do not match.",
      success: false,
      error: true,
    });
  }

  try {
    const newHashedPassword = await bcryptjs.hash(confirmPass, 10);

    const updateResult = await User.updateOne(
      { _id: id },
      { $set: { password: newHashedPassword } }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully.",
      data: updateResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the password.",
    });
  }
};




// service to get all users   
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Get All User Success",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cards",
      error: error.message,
    });
  }
};

