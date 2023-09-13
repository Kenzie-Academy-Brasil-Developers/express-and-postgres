import { NextFunction, Request, Response } from "express";
import { QueryConfig } from "pg";
import { client } from "../database/database";
import { AppError } from "../errors/errors";

export const isTodoIdValid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const queryString = `SELECT * FROM todos WHERE id = $1`;

        const queryConfig: QueryConfig = {
            text: queryString,
            values: [req.params.id]
        }
    
        const foundTodo = await client.query(queryConfig);
        
        if(!foundTodo.rows[0]){
            throw new AppError("Not found any todo with this id", 404);
        }
    
        return next(); 
    } catch (error) {
        if(error instanceof AppError){
            return res.status(error.statusCode).json({ error: error.message });
        }    
        
        console.log(error);
        return res.status(500).json("Internal server error.");
    }    
}