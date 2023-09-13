import { NextFunction, Request, Response } from "express";
import { QueryConfig } from "pg";
import { client } from "../database/database";

export const isTodoIdValid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const queryString = `SELECT * FROM todos WHERE id = $1`;

        const queryConfig: QueryConfig = {
            text: queryString,
            values: [req.params.id]
        }
    
        const foundTodo = await client.query(queryConfig);
        
        if(!foundTodo.rows[0]){
            throw new Error("Not found any todo with this id");
        }
    
        return next(); 
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({ error: error });
        }    
        
        console.log(error);
        return res.status(500).json("Internal server error.");
    }    
}