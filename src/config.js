import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://dbUser:9sZJwYhayVhc7tuO@cluster0.pwvr1.mongodb.net/dbproject?retryWrites=true&w=majority",
  PORT: process.env.PORT || 5000,
  SECRET: 'projects-api'
};
