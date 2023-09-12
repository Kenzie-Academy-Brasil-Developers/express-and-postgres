import { Router } from "express";
import { getTodos, createTodo, deleteTodo, editTodo } from "../logic";
import { getTodoByIdController } from "../controllers/todos.controllers";

const router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoByIdController);

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", editTodo);

export default router;