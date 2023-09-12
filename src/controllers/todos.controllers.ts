import { Request, Response } from "express";
import { getTodoById, getTodos } from "../services/todos.services";

export const getTodosControler = async (req: Request, res: Response) => {
    const response = await getTodos();
    
    res.status(200).json(response);
}

export const getTodoByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const response = await getTodoById(id);

    res.status(200).json(response);
}