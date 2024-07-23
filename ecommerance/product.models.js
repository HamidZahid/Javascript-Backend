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



const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MOngoDb Connected !! DB HOst ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection Failed", error)
        process.exit(1)
    }
}

export default ConnectDB


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.Databaseurl}/${wheretoexport}`)
        console.log(`MongoDB Connected !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Connection Failed", error)
        process.exit(1)
    }
}




const ConnectionDBs = async () => {
    try {

        const ConnectionsInstance = await mongoose.connection(`${process.env.DATABASE_URL}/${DB_NAMES}`)
        console.log(`MONGODB Connected !! DB HOST ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("DataBase connection Failed", error)
        process.exit(1)
        
    }
}
