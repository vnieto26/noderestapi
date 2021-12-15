import { Router } from "express";
const router = Router();
import * as taskCtrl from "../controllers/task.controller";
import { authJwt } from "../middlewares";

//router.post("/", [authJwt.verifyToken, authJwt.isAdmin], taskCtrl.createTask);
router.post("/", taskCtrl.createTask);

//router.get("/", [authJwt.verifyToken], taskCtrl.getTask);
router.get("/", taskCtrl.getTask);

//router.get("/:taskId", [authJwt.verifyToken], taskCtrl.getTaskById);
router.get("/:taskId", taskCtrl.getTaskById);

//router.put("/:taskId", [authJwt.verifyToken, authJwt.isAdmin], taskCtrl.updateTaskById);
router.put("/:taskId", taskCtrl.updateTaskById);

//router.delete("/:taskId", taskCtrl.deleteTaskById);
router.delete("/:taskId", taskCtrl.deleteTaskById);

export default router;
