import pool from "../cofig/db.js";

//Get all user service
export const getAllUserService = async () => {
  //Query to get all user from users table
  const result = await pool.query("SELECT * FROM users");
  //after getting the result , we are returning the rows
  return result.rows;
};

export const getUserByIdService = async (id) => {
  //Query to get user by Id , and we passing the id inside an array
  const result = await pool.query("SELECT * FROM user where id=$1", [id]);
  return result.rows[0];
};
export const createUserService = async (name, email) => {
  //This is query to insert an colum in an users table by name , and email
  // Returning * means return the affected row(all , including name and email)
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING * ",
    [name, email]
  );
  return result.rows[0];
};
export const updateUserService = async (id, name, email) => {
  //here the $1 and $2 are place holder ,
  //passing the placeholder value by , in array
  const result = await pool.query(
    "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0];
};
export const deleteUserService = async (id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id=$1 RETRURNING *",
    [id]
  );

  return result.rows[0];
};
