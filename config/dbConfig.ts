import mongoose from "mongoose";
import { envVariable } from "./environment";

const dbURL: string = envVariable.MONGO!;

export const db = () => {
  mongoose.connect(dbURL).then(() => {
    console.log(`Database is running and Server Response ready...🛫🛫🛫`);
  });
};
