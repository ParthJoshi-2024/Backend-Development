import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const toDo = mongoose.model("ToDo", todoSchema)