import Task from "../models/Task";

// Crear una tarea
export const createTask = async (req, res) => {
	try {
		const { task, state, projectId, userId } = req.body;
		const newTask = new Task({ task, state, projectId, userId });
		const savedTask = await newTask.save();
		res.status(200).json(savedTask);
	} catch (error) {
		console.error(error);
	}
};

// Mostrar todas las tareas
export const getTask = async (req, res) => {
	const tasks = await Task.find()
		.populate("projectId", "name")
		.populate("userId", "username");
	res.json(tasks);
};

// Mostrar una tarea en particular
export const getTaskById = async (req, res) => {
	const task = await Task.findById(req.params.taskId)
		.populate("projectId", "name")
		.populate("userId", "username");
	res.status(200).json(task);
};

// Actualizar una tarea
export const updateTaskById = async (req, res) => {
	const updateTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
		new: true,
	});
	res.status(200).json(updateTask);
};

// Eliminar una tarea
export const deleteTaskById = async (req, res) => {
	await Task.findByIdAndDelete(req.params.taskId);
	res.status(204).json();
};
