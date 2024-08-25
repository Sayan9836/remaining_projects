import { Router } from "express";
import {
  getAllUsers,
  loginUser,
  registerUser,
} from "../controller/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getallusers").get(getAllUsers);

export default router;
