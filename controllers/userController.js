import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
	res.render("join", { pageTitle: "Join" })
};
export const postJoin = async (req, res) => {
	console.log(req.body);
	const {
		boy: { name, email, password, password2 }
	} = req;
	if (password != password2) {
		res.status(400)		// 비밀번호 2개가 다를 경우 상태코드로 400을 내보냄
	} else {
		try{
			const user = await User({
				name,
				email
			});
			await User.register(user, password);
		} catch(error) {
			console.log(error);
		}
		// To DO: Log user in
		res.redirect(routes.home)
	}
	res.render("join", { pageTitle: "Join" })
}

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
	res.redirect(routes.home);
};

export const logout = (req, res) => {
	// To Do: Process Log Out
	res.redirect(routes.home)
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });