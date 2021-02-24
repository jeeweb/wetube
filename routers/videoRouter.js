import express from "express";
import routes from "../routes";
import { search, getUpload, postUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// console.log(routes.editVideo) // [Function: editVideo]
// console.log(routes.editVideo()) // /:id/edit

videoRouter.get(routes.search, search);

// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// video detail
videoRouter.get(routes.videoDetail(), videoDetail);

// edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;