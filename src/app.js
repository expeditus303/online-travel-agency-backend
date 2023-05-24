import express from "express";
import cors from "cors"
import "dotenv/config"
import db from "./config/database.connection.js";

const app = express()
app.use(express.json())
app.use(cors())

db.query('SELECT * FROM flights')

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))