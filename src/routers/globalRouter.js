import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleUsers = (req, res) => res.send("Users");

globalRouter.get("/", handleHome);
globalRouter.get("/users", handleUsers);

export default globalRouter;