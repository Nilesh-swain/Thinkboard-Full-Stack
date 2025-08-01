// export const getAllNotes = (req, res) => {
//     res.status(200).send("you gote 48 notes");
// };
//for get reeq.
import Note from "../models/Note.js";

// GET request
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(20).json(notes);
    } catch (error) {
        console.error("error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// POST request
export async function createNotes(req, res) {
    try {
        console.log("Request Body:", req.body); // ✅ Add this to debug if body is missing

        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }

        const newNote = new Note({ title, content });
        await newNote.save();

        res.status(201).json({ message: "Note created successfully", note: newNote });

    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Error creating note", error: error.message });
    }
}


// PUT request
export async function updateNotes(req, res) {
    res.status(200).json({ message: "Note updated successfully." });
}

// DELETE request
export async function deleteNote(req, res) {
    res.status(200).json({ message: "Note Deleted successfully." });
}
