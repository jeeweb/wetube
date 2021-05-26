import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
}
const privateMiddleware = (req, res, next) => {
	const url = req.url;
	if(url === "/protected"){
		return res.send("<h1>Not Allowed</h1>");
	}
	console.log("Allowed, you may continue.")
	next();
}

const handleHome = (req, res) => {
	return res.send("this is home")
}
const handleLogin = (req, res) => {
	return res.send("Login here.")
}
const handleProtected = (req, res) => {
	return res.send("Welcome to the private lounge.")
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome)
app.get("/login", handleLogin)
app.get("/protected", handleProtected)

const handleListening = () => console.log(`Server Listening on port https://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening)