import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }
}, {tiimestamps:true})

export const user = mongoose.model("User", userSchema)