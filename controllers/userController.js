import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
	res.render("join", { pageTitle: "Join" })
};
export const postJoin = async (req, res, next) => {
	console.log(req.body);
	const {
		body: { name, email, password, password2 }
	} = req;
	if (password != password2) {
		res.status(400)		// 비밀번호 2개가 다를 경우 상태코드로 400을 내보냄
		res.render("join", { pageTitle: "Join "})
	} else {
		try{
			const user = await User({
				name,
				email
			});
			await User.register(user, password);
			next();
		} catch(error) {
			console.log(error);
			res.redirect(routes.home)
		}
	}
}

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
	failureRedirect: routes.login,
	successRedirect: routes.home
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
	// console.log(accessToken, refreshToken, profile, cb);
	const { _json: { id, avatar_url: avatarUrl, name, email } } = profile;
	try{
		const user = await User.findOne({ email });
		// console.log(user);
		if (user) {
			user.githubId = id;
			user.save();
			return cb(null, user);
		} else {
			const newUser = await User.create({
				email,
				name,
				githubId: id,
				avatarUrl
			});
			return cb(null, newUser);
		}
	} catch(error) {
		return cb(error);
	}
}

export const postGithubLogIn = (req, res) => {
	res.redirect(routes.home);
}

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (accessToken, refreshToken, profile, cb) => {
	const { _json: {id, name, email}} = profile;
	// console.log(accessToken, refreshToken, profile, cb);
	try{
		if (user) {
			user.facebookId = id;
			user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large`;
			user.save();
			return cb(null, user);
		} else {
			const newUser = await User.create({
				email,
				name,
				facebookId: id,
				avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`
			});
			return cb(null, newUser);
		}
	} catch(error) {
		return cb(error);
	}
}

export const postFacebookLogin = (req, res) => {
	res.redirect(routes.home);
}

export const logout = (req, res) => {
	req.logout();
	res.redirect(routes.home)
};

export const getMe = (req, res) => res.render("userDetail", { pageTitle: "User Detail", user: req.user });

export const userDetail = async (req, res) => {
	const { params: { id } } = req;
	try{
		const user = await User.findById(id);
		res.render("userDetail", { pageTitle: "User Detail", user })
	} catch(error) {
		res.redirect(routes.home);
	}
};
export const getEditProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });