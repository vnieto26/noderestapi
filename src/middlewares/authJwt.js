import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
	let token = req.headers["x-access-token"];
	if (!token) return res.status(403).json({ message: "No se ha proporcionado ningún token" });
	try {
		const decoded = jwt.verify(token, config.SECRET);
		req.userId = decoded.id;
		const user = await User.findById(req.userId, { password: 0 });
		if (!user) return res.status(404).json({ message: "El usuario no existe" });
		next();
	} catch (error) {
		return res.status(401).json({ message: "Usuario no autorizado" });
	}
};

export const isAdmin = async (req, res, next) => {
	try {
		const user = await User.findById(req.userId);
		const roles = await Role.find({ _id: { $in: user.roles } });
		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === "admin") {
				next();
				return;
			}
		}
		return res.status(403).json({ message: "Requiere un rol administrador" });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: error });
	}
};

export const isSuperAdmin = async (req, res, next) => {
	try {
		const user = await User.findById(req.userId);
		const roles = await Role.find({ _id: { $in: user.roles } });
		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === "superadmin") {
				next();
				return;
			}
		}
		return res.status(403).json({ message: "Requiere un rol super administrador" });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ message: error });
	}
};
