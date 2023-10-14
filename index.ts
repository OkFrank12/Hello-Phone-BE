import express, { Application } from "express";
import { envVariable } from "./config/environment";
import { myApp } from "./app";
import { db } from "./config/dbConfig";

const port: number = parseInt(envVariable.PORT);

const app: Application = express();
myApp(app);

const server = app.listen(process.env.PORT || port, () => {
  db();
});

server.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);
  process.exit(1);
});

server.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
