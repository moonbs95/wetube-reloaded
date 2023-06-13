import express from "express";
import { trending, watch, edit } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/edit", edit);
globalRouter.get("/:id", watch);


export default globalRouter;