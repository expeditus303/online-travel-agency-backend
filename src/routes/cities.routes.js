import { Router } from "express";
import citiesControllers from "../controllers/cities.controllers.js";

const citesRoutes = Router()

citesRoutes.get("/", citiesControllers.getAll)
citesRoutes.get("/:departureCityId", citiesControllers.getArrivalCities)

export default citesRoutes