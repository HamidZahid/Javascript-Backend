import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email:{
        type: String,
        requires: true,
        unique: true
    },
    createdat:{
        type: mongoose.Schema.types.ObjectID,
        ref: "User"
    }
},{timestamps: true});


export const User = mongoose.model("User", userSchema);