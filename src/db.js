import mongoose from "mongoose";

mongoose.connect(
  "mongodb://127.0.0.1:27017/wetube",
  //"mongodb+srv://jiee:q0JI3FmwwOOrb2ap@atlascluster.1dgjpcz.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const handleError = (error) => console.log("DB Error", error);
const handleOpen = () => console.log("Connected to DB ✅");

db.on("error", handleError);
db.on("open", handleOpen);
