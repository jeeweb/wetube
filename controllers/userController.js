export const join = (req, res) => res.render("Join", { pageTitle: "Join" });
export const login = (req, res) => res.render("Login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("Logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("User Detail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("Edit Profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("Change Password", { pageTitle: "Change Password" });