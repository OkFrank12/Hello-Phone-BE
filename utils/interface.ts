import mongoose from "mongoose";

export interface iContacts {
  contactName: string;
  contactNumber: string;
  category: string;
  bff: {}[];
  business: {}[];
  loved: {}[];
}
export interface iBff {
  contacts: {};
}

export interface iLoved {
  contacts: {};
}

export interface iBusiness {
  contacts: {};
}

export interface iContactsData extends iContacts, mongoose.Document {}

export interface iiBffData extends iBff, mongoose.Document {}

export interface iBusinessData extends iBusiness, mongoose.Document {}

export interface iLovedData extends iLoved, mongoose.Document {}
