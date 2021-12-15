import Role from "../models/Role";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const createRoles = async () => {
	try {
		const count = await Role.estimatedDocumentCount();
		if (count > 0) return;

		const values = await Promise.all([
			new Role({ name: "superadmin" }).save(),
			new Role({ name: "admin" }).save(),
			new Role({ name: "user" }).save(),
		]);
		console.log(values);
	} catch (error) {
		console.log(error);
	}
};

export const createAdmin = async () => {
	// check for an existing admin user
	const user = await User.findOne({ email: "grupo21e3@localhost.com" });
	// get roles _id
	const roles = await Role.find({ name: { $in: ["admin"] } });
 
	if (!user) {
	  // create a new admin user
	  await User.create({
		 username: "admin",
		 email: "grupo21e3@localhost.com",
		 password: await bcrypt.hash("vno1126", 10),
		 roles: roles.map((role) => role._id),
	  });
	  console.log('Usuario Administrador Creado!')
	}
 };