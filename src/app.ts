import "dotenv/config";
import express from "express";
import TodosRouter from "./routers/todos.routes";

const app = express();

app.use(express.json());

app.use("/todos", TodosRouter);

export default app;