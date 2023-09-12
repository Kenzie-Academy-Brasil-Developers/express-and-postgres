import { QueryConfig } from "pg";
import { client } from "../database/database";
import { ITodo } from "../interfaces/todos";
import format from "pg-format";

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

export const createTodo = async (body: Omit<ITodo, "id">) => {
   const { title, content } = body;

   const queryString = `INSERT INTO todos (title, content)
     VALUES ($1, $2)
     RETURNING *;`;

   const queryConfig: QueryConfig = {
      text: queryString,
      values: [title, content],
   };

   const data = await client.query(queryConfig);

   return { message: "Todo created sucessfully", todo: data.rows[0] };
};

export const deleteTodo = async (id: string) => {
   const queryString = `DELETE FROM todos WHERE id = $1;`;

   const queryConfig: QueryConfig = {
      text: queryString,
      values: [id],
   };

   await client.query(queryConfig);

   return { message: "Todo was sucessfully deleted." };
};

export const editTodo = async (id: string, body: Partial<ITodo>) => {
   const query = format(
      `UPDATE todos SET (%I) = ROW(%L) WHERE id = (%s) RETURNING *;`,
      Object.keys(body),
      Object.values(body),
      id
   );

   const data = await client.query(query);

   return { message: "Todo was sucessfully edited.", todo: data.rows[0] };
};
