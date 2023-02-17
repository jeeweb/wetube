const videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 0,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  //console.log(req.params);
  // const id = req.params.id;
  const { id } = req.params;
  // console.log("Show video", id);
  const video = videos[id];
  return res.render("watch", { pageTitle: `Watch ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  //console.log(req.body);
  const { title } = req.body;
  videos[id].title = title;
  return res.redirect(`/videos/${id}`);
};
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
