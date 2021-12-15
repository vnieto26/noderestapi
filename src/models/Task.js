import { Schema, model } from "mongoose";

const taskSchema = new Schema(
	{
		task: String,
      state: String,
		projectId: String,
		userId: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model("Task", taskSchema);
