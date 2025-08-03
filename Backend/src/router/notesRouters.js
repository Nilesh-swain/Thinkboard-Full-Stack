// import express from 'express'
// import { createNotes, delectNote, getAllNotes, updateNotes } from '../controllers/notesControllers.js';

// const router = express.Router();

// router.get("/", getAllNotes);
// router.post("/",createNotes);
// router.put("/:id",updateNotes);
// router.delete("/:id",delectNote);

// export default router

import express from 'express';
import { createNotes, deleteNote, getAllNotes, getNoteById, updateNotes } from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id",getNoteById)
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNote);

export default router;