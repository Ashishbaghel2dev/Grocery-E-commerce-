import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./Database/db.js";
import userroute from './Routes/user.route.js';
import cors from "cors"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

ConnectDB();
app.use(cors({}))
app.use(express.json());

// Define routes
app.use("/api/user", userroute);

app.get("/", (req, res) => {
  res.send({
    message: `Server is listening on port ${PORT}`, 
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
