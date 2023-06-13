export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit")
export const search = (req, res) => res.send("search");
export const uploadVideo = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => res.send("delete video");
