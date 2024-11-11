import pool from "../cofig/db.js";

const createUserTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`;

  try {
    pool.query(queryText);
    console.log("Users table created if not presnet");
  } catch (error) {
    console.log("Error creating in user table is :", error);
  }
};

export default createUserTable;
