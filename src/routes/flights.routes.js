import { Router } from "express";
import flightsControllers from "../controllers/flights.controllers.js";

const flightsRoutes = Router()

flightsRoutes.get("/flights/:cityId", flightsControllers.get)

export default flightsRoutes