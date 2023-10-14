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
exports.viewAllContacts = exports.deleteContacts = exports.createContacts = void 0;
const contactsModel_1 = __importDefault(require("../model/contactsModel"));
const createContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactName, contactNumber, category } = req.body;
        const newContact = yield contactsModel_1.default.create({
            contactName,
            contactNumber,
            category,
        });
        return res.status(201).json({
            message: "Created Contacts as loved",
            data: newContact,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error creating contacts",
            data: error.message,
        });
    }
});
exports.createContacts = createContacts;
const deleteContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const remove = yield contactsModel_1.default.findByIdAndDelete(contactID);
        return res.status(201).json({
            message: `Deleted ${remove === null || remove === void 0 ? void 0 : remove.contactName}`,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error deleting a phone",
            data: error.message,
        });
    }
});
exports.deleteContacts = deleteContacts;
const viewAllContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const view = yield contactsModel_1.default.find().sort({
            createdAt: -1,
        });
        return res.status(200).json({
            message: "View contacts",
            data: view,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error viewing contacts",
            data: error.message,
        });
    }
});
exports.viewAllContacts = viewAllContacts;
