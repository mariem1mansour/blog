import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
  title: String,
  desc: String,
  createdBy: mongoose.SchemaTypes.ObjectId,
});
export const userModel = mongoose.model("note", notesSchema);
