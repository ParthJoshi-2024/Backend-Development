import mongoose from "mongoose";

const subToDoSchema = new mongoose.Schema({
    subTaskName : {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const SubToDo = mongoose.model("SubToDo", subToDoSchema)