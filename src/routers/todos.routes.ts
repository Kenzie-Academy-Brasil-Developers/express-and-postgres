import { Router } from "express";
import { getTodos, getTodoById, createTodo, deleteTodo, editTodo } from "../logic";

const router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", editTodo);

export default router;