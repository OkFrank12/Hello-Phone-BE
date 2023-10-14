import express from "express";
import {
  createContacts,
  deleteContacts,
  viewAllContacts,
} from "../controller/contactsController";

const contact = express.Router();

contact.route("/contact").post(createContacts);
contact.route("/:contactID/delete").delete(deleteContacts);
contact.route("/all").get(viewAllContacts);

export default contact;
