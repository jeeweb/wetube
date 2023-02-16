const videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
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
export const see = (req, res) => {
  //console.log(req.params);
  // const id = req.params.id;
  const { id } = req.params;
  console.log("Show video", id);
  const video = videos[id];
  return res.render("watch", { pageTitle: `Watch ${video.title}` });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
