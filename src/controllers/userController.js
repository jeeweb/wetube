import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  // console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }

  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  // const exists = await User.exists({ username });  // user가 존재하는지 체크
  const user = await User.findOne({ username }); // db에서 user 찾아오기
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const getEdit = (req, res) => {
  return res.render("edit-profile", {
    pageTitle: "Edit Profile",
    user: req.session.user,
  });
};
export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { name, email, usesrname, location },
  } = req;

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {
      name,
      email,
      usesrname,
      location,
    },
    { new: true }
  );
  req.session.user = updatedUser;
  /*
  req.session.user = {
    ...req.session.user,
    name,
    email,
    usesrname,
    location,
  };
  */
  return res.rendirect("/users/edit");
};

export const remove = (req, res) => res.send("Delete User");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");
