import { Router } from "express";
import { createTodoController, deleteTodoController, editTodoController, getTodoByIdController, getTodosControler } from "../controllers/todos.controllers";
import { validation } from "../middlewares/validation";
import { createTodoValidation } from "../schemas/createTodoValidation";
import { isTodoIdValid } from "../middlewares/isTodoIdValid";

const router = Router();

router.get("/", getTodosControler);

router.get("/:id", isTodoIdValid, getTodoByIdController);

router.post("/", validation(createTodoValidation), createTodoController);

router.delete("/:id", isTodoIdValid, deleteTodoController);

router.patch("/:id", editTodoController);

export default router;