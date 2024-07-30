import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MOngoDb Connected !! DB HOst ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection Failed", error)
        process.exit(1)
    }
}


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





// productSchema.pre("save", async funtion (next) {
//     this.password = bcrypt.hash(this.password, 10)
//     next()
// })

productSchema.methods.gerenateAccesstoken = function () {
    jwt.sign({
        _id: this.id,
        name: this.name,
        email: this.email,
        fullname: this.fullname
    },
    process.env.tokenname,
    {
        expireIn: process.env.expirevariablename
    }
)
}
export default ConnectDB

