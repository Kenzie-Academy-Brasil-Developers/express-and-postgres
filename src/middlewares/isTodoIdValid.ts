import { NextFunction, Request, Response } from "express";
import { QueryConfig } from "pg";
import { client } from "../database/database";

export const isTodoIdValid = async (req: Request, res: Response, next: NextFunction) => {
    const queryString = `SELECT * FROM todos WHERE id = $1`;

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [req.params.id]
    }

    const foundTodo = await client.query(queryConfig);
    
    if(!foundTodo.rows[0]){
        return res.status(404).json({ error: "Not found any todo with this id" })
    }

    return next();
}