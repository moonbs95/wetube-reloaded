import express from "express";
import { edit, remove, see, logout } from "../controllers/userController";

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);
usersRouter.get(":id", see);

export default usersRouter;