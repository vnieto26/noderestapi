import { Router } from "express";
const router = Router();
import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

// router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], userCtrl.createUser);
// router.get("/", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.getUsers);
// router.get("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.getUserById);
// router.put("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.updateUserById);
// router.delete("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteUserById);

router.post("/", userCtrl.createUser);
router.get("/", userCtrl.getUsers);
router.get("/:userId", userCtrl.getUserById);
router.put("/:userId",  userCtrl.updateUserById);
router.delete("/:userId", userCtrl.deleteUserById);


export default router;
