"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myApp = void 0;
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// import own from "./router/ownRouter";
const contactRouter_1 = __importDefault(require("./router/contactRouter"));
const myApp = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: ["*", "http://localhost:5173"],
        methods: ["POST", "GET", "DELETE", "PATCH"],
    }));
    app.use((0, morgan_1.default)("dev"));
    app.use((0, helmet_1.default)());
    // app.use("/api", own);
    app.use("/api", contactRouter_1.default);
    app.get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "Default Route is delivered for PhoneBook",
            });
        }
        catch (error) {
            return res.status(404).json({
                message: "error getting route",
                data: error.messag,
            });
        }
    });
});
exports.myApp = myApp;
