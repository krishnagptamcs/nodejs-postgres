import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./cofig/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoutes);

//Error handleing
app.use(errorHandling);

//Creating tables in DB
createUserTable();

//Coonecting to DB
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  console.log("result is ", result);
  res.send(`The db name is: ${result.rows[0].current_database}`);
});

//Server Listining

app.listen(port, () => {
  console.log("Congratulation , your server is up", port);
});
