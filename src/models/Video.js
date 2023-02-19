import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String, // {type: String}
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    view: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
