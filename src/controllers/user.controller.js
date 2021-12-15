import User from "../models/User";
import Role from "../models/Role";

// Crear un usuario
export const createUser = async (req, res) => {
	try {
		const { username, email, password, roles } = req.body;
		const rolesFound = await Role.find({ name: { $in: roles } });
		const newUser = new User({
			username,
			email,
			password,
			roles: rolesFound.map((role) => role._id),
		});
		newUser.password = await User.encryptPassword(newUser.password);
		const savedUser = await newUser.save();
		res.status(200).json({
			_id: savedUser._id,
			username: savedUser.username,
			email: savedUser.email,
			roles: savedUser.roles,
		});
	} catch (error) {
		console.error(error);
	}
};

// Mostrar todos los usuarios
export const getUsers = async (req, res) => {
	const users = await User.find();
	res.json(users)
};

// Mostrar un usuario en particular
export const getUserById = async (req, res) => {
	const user = await User.findById(req.params.userId);
	res.status(200).json({
		username: user.username,
		email: user.email,
		roles: user.roles,
	});
};

// Actualizar un usuario
export const updateUserById = async (req, res) => {
	const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
		new: true,
	});
	res.status(200).json(updateUser);
};

// Eliminar un usuario
export const deleteUserById = async (req, res) => {
	await User.findByIdAndDelete(req.params.userId);
	res.status(204).json();
};
