import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

const globalRouter = express.Router();


const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", trending)
globalRouter.get("/join", join)
globalRouter.get("/login", login)
globalRouter.get("/search", search)

export default globalRouter;