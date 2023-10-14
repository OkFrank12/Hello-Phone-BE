import env from "dotenv";
env.config();

export const envVariable = {
  PORT: process.env.PORT!,
  MONGO: process.env.MONGO_URL,
};
