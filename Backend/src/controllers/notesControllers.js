// export const getAllNotes = (req, res) => {
//     res.status(200).send("you gote 48 notes");
// };
//for get reeq.
import Note from "../models/Note.js";

// GET request
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1}); //sort according to new note added display 1st.
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Get Note By Id.
export async function getNoteById(req,res) {
    try{
        const noteById = await Note.findById(req.params.id);
        if(!noteById) return res.status(404).json({message:"Note Not Found."});
        res.status(200).json(noteById)
    }catch{
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal Server Error"});

    }
}

// POST request
export async function createNotes(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title , content });
        const savedNote = await note.save();

        res.status(201).json(savedNote);

    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Error creating note", error: error.message });
    }
}


// PUT request
export async function updateNotes(req, res) {
   try{
        const {title,content}=req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatedNote) return res.status(404).json({message:"Note not Found"})
        res.status(200).json({updatedNote})
   }catch(error){
        console.error("Error in UpdateNote Controller",error);
        res.status(500).json({message:" Internal server error"});
   }
}

// DELETE request
export async function deleteNote(req, res) {
    try{
        const delectNote = await Note.findByIdAndDelete(req.params.id)
        if(!delectNote) return res.status(404).json({message: "Note not found"})
            res.status(200).json({message:"Note Will Be Delected."})

    }catch{
        console.error("Error in delectNote",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
