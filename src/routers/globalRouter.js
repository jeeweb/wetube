import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();


const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", trending)
globalRouter.get("/join", join)

export default globalRouter;