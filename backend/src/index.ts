import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json())//This code helps to convert the body of API requests into json automatically for us so that we don't have to handle that ourself in each of our endpoints.
app.use(express.urlencoded({ extended: true }))//this code helps us to parse the url to get the create parameters and things like that

app.use(cors())

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "hello from express endpoint 💻!" });
})

app.listen(7000, () => {
    console.log("Server running on localhost :7000");
})//start the server
