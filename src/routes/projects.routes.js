import { Router } from "express";
const router = Router();

import * as projectsCtrl from "../controllers/projects.controller";
import { authJwt } from "../middlewares";

// Obtener todos los proyectos
router.get("/", projectsCtrl.getProjects);

// Crear Proyectos
//router.post("/", [authJwt.verifyToken, authJwt.isAdmin], projectsCtrl.createProject);
router.post("/", projectsCtrl.createProject);

// Obtener un proyecto
router.get("/:projectId", projectsCtrl.getProjectById);

// Actualizar un proyecto
//router.put("/:projectId", [authJwt.verifyToken, authJwt.isAdmin], projectsCtrl.updateProjectById);
router.put("/:projectId", projectsCtrl.updateProjectById);

// Eliminar un proyecto
//router.delete("/:projectId", [authJwt.verifyToken, authJwt.isAdmin], projectsCtrl.deleteProjectById);
router.delete("/:projectId", projectsCtrl.deleteProjectById);

export default router;
