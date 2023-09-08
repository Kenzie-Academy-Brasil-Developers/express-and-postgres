import "dotenv/config";
import express from "express";
import { connectDatabase, createDatabaseTables } from "./database";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, async () => {   
   await connectDatabase();
   await createDatabaseTables();
   console.log(`Server is running on port ${PORT}`);
});
