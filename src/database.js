import mongoose from "mongoose";
import config from "./config";

mongoose
	.connect(config.MONGODB_URI)
	.then((db) => console.log(`Base de datos conectada`))
	.catch((err) => console.log(err));
