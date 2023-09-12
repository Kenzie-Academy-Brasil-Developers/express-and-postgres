import app from "./app";
import { connectDatabase, createDatabaseTables } from "./database/database";

const PORT = process.env.PORT;

app.listen(PORT, async () => {   
   await connectDatabase();
   await createDatabaseTables();
   console.log(`Server is running on port ${PORT}`);
});
