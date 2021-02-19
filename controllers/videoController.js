import { videos } from "../db"
import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
	// console.log(req);
	console.log(req.query.term);
	// const searchingBy = req.query.term;	//EC6 이전의 선언방식
	const {
		query: { term: searchingBy }
	} = req;	// term = req.query.term 이라고 선언하는 것보다 더 좋은 방식
	res.render("search", { pageTitle: "Search", searchingBy, videos });
}
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
	const {
		body: { file, title, description }
	} = req;
	// To do: Upload and save video
	res.redirect(routes.videoDetail(324393))
};


export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });