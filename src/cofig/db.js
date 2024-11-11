import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;

dotenv.config();



console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);


//Connecting to DB
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10), // Ensure port is parsed as an integer
});

// Listen for successful connection
pool.on("connect", () => {
  console.log("Connection pool established");
});

export default pool;
