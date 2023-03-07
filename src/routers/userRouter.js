import express from "express";
import {
  getEdit,
  postEdit,
  remove,
  logout,
  see,
} from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddleware } from "../middleware";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
// userRouter.get("github/start", publicOnlyMiddleware, startGithubLogin);
// userRouter.get("github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
