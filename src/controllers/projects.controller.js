import Project from "../models/Project";

// Crear un  proyecto
export const createProject = async (req, res) => {
	try {
		const { name, description } = req.body;
		const newProject = new Project({ name, description });
		const projectSave = await newProject.save();
		res.status(201).json(projectSave);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};

// Mostrar todos los proyectos
export const getProjects = async (req, res) => {
	const projects = await Project.find();
	res.json(projects);
};

// Mostrar un proyecto en particular
export const getProjectById = async (req, res) => {
	const project = await Project.findById(req.params.projectId);
	res.status(200).json(project);
};

// Actualizar un proyecto
export const updateProjectById = async (req, res) => {
	const updateProject = await Project.findByIdAndUpdate(
		req.params.projectId,
		req.body,
		{
			new: true,
		}
	);
	res.status(204).json(updateProject);
};

// Eliminar un proyecto
export const deleteProjectById = async (req, res) => {
	await Project.findByIdAndDelete(req.params.projectId);
	res.status(204).json();
};
