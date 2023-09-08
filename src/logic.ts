import { Request, Response } from "express";
import { client } from "./database";

export const createTodo = async (req: Request, res: Response) => {
    const { title, content } = req.body;

    const query = `INSERT INTO todos (title, content)
    VALUES ('${title}', '${content}')
    RETURNING *;`

    const data = await client.query(query);

    res.status(201).json({ message: "Todo created sucessfully", todo: data.rows[0]});
}