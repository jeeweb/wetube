import mongoose from "mongoose";

mongoose.connect(
  process.env.DB_URL
  //"mongodb+srv://jiee:q0JI3FmwwOOrb2ap@atlascluster.1dgjpcz.mongodb.net/test",
);

const db = mongoose.connection;

const handleError = (error) => console.log("DB Error", error);
const handleOpen = () => console.log("Connected to DB ✅");

db.on("error", handleError);
db.on("open", handleOpen);
