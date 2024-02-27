import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config()


const password = process.env.PASSWORD
console.log(password)

const URL = `mongodb+srv://oboindrilabanerjee:${password}@tech-terms-db.vqtklme.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async () => {
    try{
       await mongoose.connect(URL);
       console.log("Connected")
    }catch(e){
        console.log(e.message);
        console.log("Not Connected")
    }

}

