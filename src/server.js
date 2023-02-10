import express from "express";
import res from "express/lib/response";

const PORT = 4004;
const app = express();

const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};

const methodLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};

const home = (req, res) => {
  console.log("I will respond.");
  res.send("hello");
};
const login = (req, res) => {
  return res.send("login");
};
app.use(methodLogger, routerLogger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4004, handleListening);
