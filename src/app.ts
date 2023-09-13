import "dotenv/config";
import "express-async-errors";
import express from "express";
import TodosRouter from "./routers/todos.routes";
import { handleErrors } from "./errors/errors";

const app = express();

app.use(express.json());

app.use("/todos", TodosRouter);

app.use(handleErrors);

export default app;