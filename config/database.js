import mongoose from "mongoose";

let url  = process.env.URI_MONGO


/* mongoose.connect(url)
.then(()=> console.log("conectado a la bases de datos"))
.catch((error)=> console.log(error)) */

async function contectBasesDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Bases de datos conectada");
    } catch (error) {
        console.log(error);
    }
}
contectBasesDatos()