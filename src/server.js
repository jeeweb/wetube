import express from "express";

const PORT = 4004;
const app = express();

const handleHome = (req, res) => {
  // return res.end();
  return res.send("Home");
};
const handleLogin = (req, res) => {
  return res.send("Login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4004, handleListening);
