import { Schema, model } from "mongoose";

const projectSchema = new Schema(
	{
		name: String,
		description: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model("Project", projectSchema);
