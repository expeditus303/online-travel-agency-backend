import express from "express";
import cors from "cors"
import "dotenv/config"
import appRoutes from "./routes/app.routes.js";

const app = express()
app.use(express.json())
app.use(cors())

app.use(appRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))