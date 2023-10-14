import mongoose from "mongoose";
import { iContacts, iContactsData } from "../utils/interface";

const contactModel = new mongoose.Schema<iContactsData>(
  {
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
  },
  { timestamps: true }
);

export default mongoose.model<iContactsData>("contacts", contactModel);
