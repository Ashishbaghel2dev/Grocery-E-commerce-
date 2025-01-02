import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: String,
        required: true, 
    },
    address: {
        type: String,
        maxlength: 100
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
});

export const User =  mongoose.model("User", UserSchema);
