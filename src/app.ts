import "dotenv/config";
import express from "express";
import { connectDatabase } from "./database";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, async () => {   
   console.log(`Server is running on port ${PORT}`);
   // await connectDatabase();
});
