// import mongoose from "mongoose";

// // 1-create a shchema
// // 2-model based off of that schema
// const noteSchema = new mongoose.schema(
//     {
//         title: {
//             type: String,
//             required: true
//         },
//         content: {
//             type: String,
//             required: true
//         },
//     },
//     {timestamps: true} //created and updated time
// );


// //create model.
// const Note = mongoose.model("Note",noteSchema)
// export default Note

import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Note = mongoose.model("Note", noteSchema);

export default Note;