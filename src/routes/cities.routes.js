import { Router } from "express";
import citiesControllers from "../controllers/cities.controllers.js";

const citesRoutes = Router()

citesRoutes.get("/", citiesControllers.getDepart)
citesRoutes.get("/:departureCityId", citiesControllers.getArrival)

export default citesRoutes