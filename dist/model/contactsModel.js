"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactModel = new mongoose_1.default.Schema({
    contactName: {
        type: String,
    },
    contactNumber: {
        type: String,
        unique: true,
    },
    category: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("contacts", contactModel);
