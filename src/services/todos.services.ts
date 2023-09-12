import { QueryConfig } from "pg";
import { client } from "../database/database";

export const getTodos = async () => {
    const query = `SELECT * FROM todos;`;
 
    const data = await client.query(query);
 
    return data.rows;
 };

export const getTodoById = async (id: string) => {
    const queryString = `SELECT * FROM todos WHERE id = $1;`;
 
    const queryConfig: QueryConfig = {
       text: queryString,
       values: [id],
    };
 
    const data = await client.query(queryConfig);
 
    return data.rows[0];
 };