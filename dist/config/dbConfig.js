"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("./environment");
const dbURL = environment_1.envVariable.MONGO;
const db = () => {
    mongoose_1.default.connect(dbURL).then(() => {
        console.log(`Database is running and Server Response ready...🛫🛫🛫`);
    });
};
exports.db = db;
