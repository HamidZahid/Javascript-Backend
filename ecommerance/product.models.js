import mongoose from "mongoose";

const ProductidSchema = new mongoose.Schema({
    productif:{
        type:String,
        required:true
    }
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default: 0
    },
    productid:{
        type: [ProductidSchema]
    }
},{timestamps:true});

export const Product = mongoose.model("Product", productSchema);