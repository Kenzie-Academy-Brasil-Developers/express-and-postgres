import { Request, Response } from "express";
import { client } from "./database";

export const getTodoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `SELECT * FROM todos WHERE id = ${id};`

    const data = await client.query(query);

    return res.status(200).json(data.rows[0]);
}

export const getTodos = async (req: Request, res: Response) => {
    const query = `SELECT * FROM todos;`

    const data = await client.query(query);

    return res.status(200).json(data.rows);
}

export const createTodo = async (req: Request, res: Response) => {
    const { title, content } = req.body;

    const query = `INSERT INTO todos (title, content)
    VALUES ('${title}', '${content}')
    RETURNING *;`

    const data = await client.query(query);

    return res.status(201).json({ message: "Todo created sucessfully", todo: data.rows[0]});
}