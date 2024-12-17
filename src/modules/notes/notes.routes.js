import express from "express";
import { addNote, deleteNote, updateNote } from "./notes.controller.js";

const notesRouter = express.Router();

notesRouter.post("/", addNote);
notesRouter.put("/", updateNote);
notesRouter.delete("/", deleteNote);
export default notesRouter;
