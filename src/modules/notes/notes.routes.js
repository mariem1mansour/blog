import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "./notes.controller.js";

const notesRouter = express.Router();

notesRouter.post("/", addNote);
notesRouter.put("/", updateNote);
notesRouter.delete("/", deleteNote);
notesRouter.get("/", getAllNotes);
export default notesRouter;
