import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import express, { Application, Request, Response } from "express";
// import own from "./router/ownRouter";
import contact from "./router/contactRouter";

export const myApp = async (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(helmet());

  // app.use("/api", own);
  app.use("/api", contact);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Default Route is delivered for PhoneBook",
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error getting route",
        data: error.messag,
      });
    }
  });
};
