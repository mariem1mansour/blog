import { notesModel } from "../../../models/notes.model.js";

const addNote = async (req, res) => {
  const { title, desc, createdBy } = req.body;
  await notesModel.insertMany({ title, desc, createdBy });
  res.json({ message: "note created successfully !" });
};

export {addNote}
