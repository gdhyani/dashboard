import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose
            .connect(
                "mongodb+srv://chakraa:nEUNfoQR88Jary2W@clustor0.eqnshxn.mongodb.net/"
            )
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.log("MongoDBdddddddddddddddddd" + err);
            process.exit();
        });
    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}
