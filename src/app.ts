import "dotenv/config";
import express from "express";
import { connectDatabase, createDatabaseTables } from "./database";
import { createTodo } from "./logic";

const app = express();

app.use(express.json());

app.post("/", createTodo);

const PORT = process.env.PORT;

app.listen(PORT, async () => {   
   await connectDatabase();
   await createDatabaseTables();
   console.log(`Server is running on port ${PORT}`);
});
