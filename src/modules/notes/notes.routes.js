import express from 'express'
import { addNote } from "./notes.controller.js";

const notesRouter = express.Router();

notesRouter.post("/", addNote);
export default notesRouter;
