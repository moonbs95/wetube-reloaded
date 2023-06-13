import express from "express";
import { uploadVideo, see, edit, deleteVideo } from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/upload", uploadVideo);
videosRouter.get("/:id", see);
videosRouter.get("/:id/edit", edit);
videosRouter.get("/:id/delete", deleteVideo);

export default videosRouter;