import { notesModel } from "../../../models/notes.model.js";

const addNote = async (req, res) => {
  const { title, desc, createdBy } = req.body;
  await notesModel.insertMany({ title, desc, createdBy });
  res.json({ message: "note created successfully !" });
};

const updateNote = async (req, res) => {
  const { title, desc, id } = req.body;
  let note = await notesModel.findByIdAndUpdate(
    id,
    { title, desc },
    { new: true }
  );
  if (!note) return res.json("note not found");
  res.json({ message: "note updated successfully !", note });
};
const deleteNote = async (req, res) => {
  const { id } = req.body;
  let note = await notesModel.findByIdAndDelete(id);
  if (!note) return res.json("note not found");
  res.json({ message: "note deleted successfully !", note });
};

const getAllNotes = async (req, res) => {
  const notes = await notesModel.find({}).populate('createdBy','name-_id');
  res.json({ message: "all notes found successfully !", notes });
};

const getUserNotes = async (req, res) => {
  const {createdBy}= req.params;
  const notes = await notesModel.find({createdBy});
  res.json({ message: " notes found successfully !", notes });
};
export { addNote, updateNote, deleteNote , getAllNotes  , getUserNotes};
