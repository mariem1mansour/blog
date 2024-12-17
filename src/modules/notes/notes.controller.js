import { notesModel } from "../../../models/notes.model.js";

const addNote = async (req, res) => {
  const { title, desc, createdBy } = req.body;
  await notesModel.insertMany({ title, desc, createdBy });
  res.json({ message: "note created successfully !" });
};

const updateNote = async (req, res) => {
  const { title, desc, id } = req.body;
let note =   await notesModel.findByIdAndUpdate(id, { title, desc }, { new: true });
if(!note) return res.json("note not found")
  res.json({ message: "note updated successfully !",note });
};
export { addNote, updateNote };