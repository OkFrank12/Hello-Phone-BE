"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactsController_1 = require("../controller/contactsController");
const contact = express_1.default.Router();
contact.route("/contact").post(contactsController_1.createContacts);
contact.route("/:contactID/delete").delete(contactsController_1.deleteContacts);
contact.route("/all").get(contactsController_1.viewAllContacts);
exports.default = contact;
