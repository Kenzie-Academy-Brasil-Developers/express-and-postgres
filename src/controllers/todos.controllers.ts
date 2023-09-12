import { Request, Response } from "express";
import { getTodoById } from "../services/todos.services";

export const getTodoByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const response = await getTodoById(id);

    res.status(200).json(response);
}