import Video from "../models/Video";

export const home = async (req, res) => {
	/* callback 함수로 작성할 때 
	Video.find({}, (error, videos) => {
		if (error) {
			return res.render("server-error")
		}
		return res.render("home", { pageTitle: "Home", videos: [] });
	})
	*/
	const videos = await Video.find({})
	return res.render("home", { pageTitle: "Home", videos: [] });
};
export const watch = (req, res) => {
	const { id } = req.params;
	return res.render("watch", { pageTitle: `Watching` });
}
export const getEdit = (req, res) => {
	const { id } = req.params;
	return res.render("edit", { pageTitle: `Editing` });
}
export const postEdit = (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	return res.redirect(`/videos/${id}`);
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");

export const getUpload = (req, res) => {
	return res.render("upload", {pageTitle: "Upload Video"});
}
export const postUpload = (req, res) => {
	// console.log(req.body)
	const { title } = req.body;
	return res.redirect("/")
}