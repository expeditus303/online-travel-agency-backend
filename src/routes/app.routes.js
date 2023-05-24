import { Router } from "express";
import citesRoutes from "./cities.routes.js";
import flightsRoutes from "./flights.routes.js";

const appRoutes = Router()

appRoutes.use([citesRoutes, flightsRoutes])

export default appRoutes