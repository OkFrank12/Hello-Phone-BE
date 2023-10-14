import { Request, Response } from "express";
import contactsModel from "../model/contactsModel";

export const createContacts = async (req: Request, res: Response) => {
  try {
    const { contactName, contactNumber, category } = req.body;
    const newContact = await contactsModel.create({
      contactName,
      contactNumber,
      category,
    });
    return res.status(201).json({
      message: "Created Contacts as loved",
      data: newContact,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating contacts",
      data: error.message,
    });
  }
};

export const deleteContacts = async (req: Request, res: Response) => {
  try {
    const { contactID } = req.params;

    const remove = await contactsModel.findByIdAndDelete(contactID);

    return res.status(201).json({
      message: `Deleted ${remove?.contactName}`,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error deleting a phone",
      data: error.message,
    });
  }
};

export const viewAllContacts = async (req: Request, res: Response) => {
  try {
    const view = await contactsModel.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: "View contacts",
      data: view,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error viewing contacts",
      data: error.message,
    });
  }
};
