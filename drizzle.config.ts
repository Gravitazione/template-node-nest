import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "mysql", // "mysql" | "sqlite" | "postgresql"
  schema: "",
  out: "./src/drizzle",
  dbCredentials: {
    user: "root",
    password: 'root',
    host: "localhost",
    port: 3306,
    database: "my_schema",
  }
});