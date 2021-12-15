import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import pkg from "../package.json";
import { createRoles, createAdmin } from "./libs/initialSetup";

import projectsRoutes from "./routes/projects.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/users.routes";
import tasksRoutes from "./routes/tasks.routes";

const app = express();
createRoles();
createAdmin();

// Configuraciones
app.set("pkg", pkg);
app.set("port", process.env.PORT || 5000);
app.set("json spaces", 4);

const corsOptions = {
	// origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.json({
		message: "Bienvenido a mi API de Proyectos",
		author: app.get("pkg").author,
		name: app.get("pkg").name,
		description: app.get("pkg").description,
		version: app.get("pkg").version,
	});
});

app.use("/api/projects", projectsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/tasks", tasksRoutes);

export default app;
