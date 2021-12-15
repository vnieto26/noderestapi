import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

// Crear un usuario Estandar
// export const signUp = async (req, res) => {
// 	try {
// 		const { username, email, password } = req.body;
// 		const newUser = new User({
// 			username,
// 			email,
// 			password: await User.encryptPassword(password),
// 		});
// 		const role = await Role.findOne({ name: "user" });
// 		newUser.roles = [role._id];
// 		const savedUser = await newUser.save();
// 		const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
// 			expiresIn: 86400, // 24 horas
// 		});
// 		res.status(200).json({ token });
// 	} catch (error) {
// 		console.log(error);
// 		return res.status(500).json(error);
// 	}
// };

// Iniciar Sesión
export const signIn = async (req, res) => {
	try {
		const userFound = await User.findOne({ email: req.body.email }).populate(
			"roles"
		);
		if (!userFound)
			return res.status(400).json({ message: "Usuario no encontrado" });
		const matchPassword = await User.comparePassword(
			req.body.password,
			userFound.password
		);
		if (!matchPassword)
			return res
				.status(401)
				.json({ token: null, message: "Password invalido" });

		const token = jwt.sign({ id: userFound._id }, config.SECRET, {
			expiresIn: 86400,
		});
		res.json({ token });
	} catch (error) {
		console.log(error);
	}
};
