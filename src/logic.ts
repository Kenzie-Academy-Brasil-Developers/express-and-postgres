import { Request, Response } from "express";
import { client } from "./database";
import { QueryConfig } from "pg";
import format from "pg-format";

export const getTodoById = async (req: Request, res: Response) => {
   const { id } = req.params;
   const queryString = `SELECT * FROM todos WHERE id = $1;`;

   const queryConfig: QueryConfig = {
    text: queryString,
    values: [id],
   }

   const data = await client.query(queryConfig);

   return res.status(200).json(data.rows[0]);
};

export const getTodos = async (req: Request, res: Response) => {
   const query = `SELECT * FROM todos;`;

   const data = await client.query(query);

   return res.status(200).json(data.rows);
};

export const createTodo = async (req: Request, res: Response) => {
   const { title, content } = req.body;

   const queryString = `INSERT INTO todos (title, content)
    VALUES ($1, $2)
    RETURNING *;`;

   const queryConfig: QueryConfig = {
      text: queryString,
      values: [title, content],
   };

   const data = await client.query(queryConfig);

   return res
      .status(201)
      .json({ message: "Todo created sucessfully", todo: data.rows[0] });
};

export const deleteTodo = async (req: Request, res: Response) => {
   const { id } = req.params;

   const queryString = `DELETE FROM todos WHERE id = $1;`;

   const queryConfig: QueryConfig = {
      text: queryString,
      values: [id],
   };

   await client.query(queryConfig);

   return res.status(200).json({ message: "Todo was sucessfully deleted." });
};