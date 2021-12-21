import { Schema, model } from "mongoose";

const taskSchema = new Schema(
	{
		task: String,
      state: String,
		// projectId: [{type: Schema.Types.ObjectId, ref: "Project", autopopulate: true}],
		// userId: [{type: Schema.Types.ObjectId, ref: "User", autopopulate: true}],
		projectId: {type: Schema.Types.ObjectId, ref: "Project"},
		userId: {type: Schema.Types.ObjectId, ref: "User"},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

//taskSchema.plugin(require('mongoose-autopopulate'));

export default model("Task", taskSchema);
