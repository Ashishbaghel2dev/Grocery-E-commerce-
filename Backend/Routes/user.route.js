import { Router } from "express";
import { forgetPassword, getAllUsers, updatePasswordService, updateUserService, Userlogin, UserSignup } from "../controller/user.controler.js";
import Auth from "../middleware/Auth.js";
import adminAuth from "../middleware/Adminauth.js";



const router = Router();

router.post("/register", UserSignup);
router.post("/login", Userlogin);
router.patch("/update",Auth,updateUserService);
router.post("/forget-password", forgetPassword);
router.post("/update-password", updatePasswordService);
router.post("/get-all-user",Auth , adminAuth, getAllUsers);
export default router;
