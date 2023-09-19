import { Request, Response } from "express";
import {
   createTodo,
   deleteTodo,
   editTodo,
   getTodoById,
   getTodos,
} from "../services/todos.services";

export const getTodosControler = async (req: Request, res: Response) => {
   const response = await getTodos();

   res.status(200).json(response);
};

export const getTodoByIdController = async (req: Request, res: Response) => {
   const response = await getTodoById(req.params.id);

   res.status(200).json(response);
};

export const createTodoController = async (req: Request, res: Response) => {
   const response = await createTodo(req.body);

   res.status(201).json(response);
};

export const deleteTodoController = async (req: Request, res: Response) => {
   const response = await deleteTodo(req.params.id);

   res.status(200).json(response);
};

export const editTodoController = async (req: Request, res: Response) => {
   const response = await editTodo(req.params.id, req.body);

   res.status(200).json(response);
};
