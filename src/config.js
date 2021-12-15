import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/dbproject",
  PORT: process.env.PORT || 5000,
  SECRET: 'projects-api'
};
