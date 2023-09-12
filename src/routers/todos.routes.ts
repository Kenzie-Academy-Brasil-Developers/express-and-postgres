import { Router } from "express";
import { createTodoController, deleteTodoController, editTodoController, getTodoByIdController, getTodosControler } from "../controllers/todos.controllers";

const router = Router();

router.get("/", getTodosControler);

router.get("/:id", getTodoByIdController);

router.post("/", createTodoController);

router.delete("/:id", deleteTodoController);

router.patch("/:id", editTodoController);

export default router;