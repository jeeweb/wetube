export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home" });
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
