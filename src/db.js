import mongoose from "mongoose";

mongoose.connect(
  process.env.DB_URL
  //"mongodb://127.0.0.1:27017/wetube"
);

const db = mongoose.connection;

const handleError = (error) => console.log("DB Error", error);
const handleOpen = () => console.log("Connected to DB ✅");

db.on("error", handleError);
db.on("open", handleOpen);
