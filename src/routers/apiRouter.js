import express from "express";
import { registerView, createComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView); // URL을 바꾸지 않음
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);

export default apiRouter;
