import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
	try{
		const videos = await Video.find({}).sort({ _id: -1 }); 
		res.render("home", { pageTitle: "Home", videos });
	} catch(error){
		console.log(error);
		res.render("home", { pageTitle: "Home", videos: [] });
	}
};
export const search = async (req, res) => {
	// console.log(req);
	console.log(req.query.term);
	// const searchingBy = req.query.term;	//EC6 이전의 선언방식
	const {
		query: { term: searchingBy }
	} = req;	// term = req.query.term 이라고 선언하는 것보다 더 좋은 방식
	let videos = [];
	try{
		videos = await Video.find({ 
			title: { $regex: searchingBy, $options: "i"} 
		});
	} catch(error){
		console.log(error);
	}
	res.render("search", { pageTitle: "Search", searchingBy, videos });
}
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
	const { 
		body: { title, description },
		file: { path }
	} = req;
	const newVideo = await Video.create({
		fileUrl: path,
		title,
		description
	});
	console.log(newVideo)
	res.redirect(routes.videoDetail(newVideo.id))
};

export const videoDetail = async (req, res) => {
	// console.log(req.params);
	const {
		params: {id}
	} = req;
	try{
		const video = await Video.findById(id);
		console.log(video);
		res.render("videoDetail", { pageTitle: video.title, video });
	} catch(error) {
		// console.log(error);
		res.redirect(routes.home);
	}
}
export const getEditVideo = async (req, res) => {		// 기존 video 정보를 가져와 템플릿 랜더링
	const {
		params: {id}		// id를 가져옴
	} = req;
	try{
		const video = await Video.findById(id);	// 해당 id의 video를 가져옴
		res.render("editVideo", { pageTitle: `Edit ${video.title}`, video })
	} catch(error){
		res.redirect(routes.home);
	}
}; 

export const postEditVideo = async (req, res) => {	// video를 업데이트
	const {
		params: {id},
		body: {title, description}
	} = req;
	try{
		await Video.findOneAndUpdate({ _id: id }, { title, description })
		res.redirect(routes.videoDetail(id));
	} catch(error){
		res.redirect(routes.home);
	}
};

export const deleteVideo = async (req, res) => {
	const {
		params: {id}
	} = req;
	try{
		await Video.findOneAndRemove({ _id: id});
	} catch(error){
		console.log(error);
	}
	res.redirect(routes.home)
};