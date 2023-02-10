import express from "express";
import morgan from "morgan";

const PORT = 4004;
const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  console.log("I will respond.");
  res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4004, handleListening);
