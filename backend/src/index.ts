import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from "./routes/users.routes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json())//This code helps to convert the body of API requests into json automatically for us so that we don't have to handle that ourself in each of our endpoints.
app.use(express.urlencoded({ extended: true }))//this code helps us to parse the url to get the create parameters and things like that

app.use(cors())

app.use("/api/users", userRoutes);

app.listen(7000, () => {

    console.log("Server running on localhost :7000");
})//start the server
