import { User } from "../model/user.model.js";


const adminAuth = async (req, res, next) => {
    try {
        const userId = req.user.userId;

    
        const existUser = await User.findById(userId);

        if (!existUser) {
            return res.status(404).json({
                message: "User not found",
                success: false,
                error: true,
            });
        }

        // Check if the user's role is "Admin"
        if (existUser.role !== "ADMIN") {
            return res.status(403).json({
                message: "Access Denied: Admins Only",
                success: false,
                error: true,
            });
        }

        // Allow access to the route if the user is Admin
        next();
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            success: false,
            error: true,
        });
    }
};

export default adminAuth;
