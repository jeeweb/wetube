import { videos } from "../db"

export const home = (req, res) => res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
	// console.log(req);
	console.log(req.query.term);
	// const searchingBy = req.query.term;	//EC6 이전의 선언방식
	const { query: { term: searchingBy }} = req;	// term = req.query.term 이라고 선언하는 것보다 더 좋은 방식
	res.render("Search", { pageTitle: "Search", searchingBy });
}
export const upload = (req, res) => res.render("Upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("Video Detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("Delete Video", { pageTitle: "Delete Video" });