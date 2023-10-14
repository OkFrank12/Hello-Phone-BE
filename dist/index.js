"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("./config/environment");
const app_1 = require("./app");
const dbConfig_1 = require("./config/dbConfig");
const port = parseInt(environment_1.envVariable.PORT);
const app = (0, express_1.default)();
(0, app_1.myApp)(app);
const server = app.listen(process.env.PORT || port, () => {
    (0, dbConfig_1.db)();
});
server.on("uncaughtException", (error) => {
    console.log("uncaughtException: ", error);
    process.exit(1);
});
server.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection: ", reason);
    server.close(() => {
        process.exit(1);
    });
});
