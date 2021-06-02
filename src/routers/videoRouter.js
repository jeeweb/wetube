import express from "express";
import { watch, getEdit, postEdit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload)
videoRouter.get("/:id(\\d+)", watch)
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
//videoRouter.get("/:id(\\d+)/edit", getEdit)
//videoRouter.post("/:id(\\d+)/edit", postEdit)
videoRouter.get("/:id(\\d+)/delete", deleteVideo)

export default videoRouter;