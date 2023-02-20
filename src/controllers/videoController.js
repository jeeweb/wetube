import Video from "../models/Video";

/* callback
export const home = (req, res) => {
  console.log("Start");
  Video.find({}, (error, videos) => {
    console.log("Search Finished");
    return res.render("home", { pageTitle: "Home", videos });
  });
  console.log("I finish first");
};
*/
// promise
export const home = async (req, res) => {
  try {
    // console.log("I Start");
    const videos = await Video.find({});
    // console.log("I finish");
    //console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("server-error", { error });
  }
};

export const watch = (req, res) => {
  //console.log(req.params);
  // const id = req.params.id;
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  //console.log(req.body);
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
