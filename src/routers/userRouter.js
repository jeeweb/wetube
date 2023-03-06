import express from "express";
import {
  getEdit,
  postEdit,
  remove,
  logout,
  see,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/delete", remove);
userRouter.get("/:id", see);

export default userRouter;
