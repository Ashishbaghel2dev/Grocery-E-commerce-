import mongoose from "mongoose";

const ConnectDB = () =>{

    try {
        mongoose.connect(process.env.DATABASE_URI)
        console.log("Data Base is Connected Succesfull")

    } catch (error) {
    
        console.log(error)
    
    }

}

export default ConnectDB;
