import express from "express";
import { join, login } from "../controllers/userController";
import { trending, watch, edit, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
globalRouter.get("/edit", edit);
globalRouter.get("/:id", watch);


export default globalRouter;