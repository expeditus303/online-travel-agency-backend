import { StatusCodes } from "http-status-codes";
import citiesServices from "../services/cities.services.js";

async function getAll(req, res, next) {
    try {
        const cities = await citiesServices.getAll()

        res.status(StatusCodes.OK).send(cities)
    } catch (err) {
        next(err)
    }
}

async function getArrivalCities(req, res, next){
    const { departureCityId } = req.params

    try {
        const arrivalCities = await citiesServices.getArrivalCities(departureCityId)

        res.status(StatusCodes.OK).send(arrivalCities)
    } catch (err) {
        next(err)
    }

}

const citiesControllers = {
    getAll,
    getArrivalCities
}

export default citiesControllers