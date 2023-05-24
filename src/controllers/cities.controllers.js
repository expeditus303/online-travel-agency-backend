import { StatusCodes } from "http-status-codes";
import citiesServices from "../services/cities.services.js";

async function getDepart(req, res, next) {
    try {
        const cities = await citiesServices.getDepart()

        res.status(StatusCodes.OK).send(cities)
    } catch (err) {
        next(err)
    }
}

async function getArrival(req, res, next){
    const { departureCityId } = req.params

    try {
        const arrivalCities = await citiesServices.getArrival(departureCityId)

        res.status(StatusCodes.OK).send(arrivalCities)
    } catch (err) {
        next(err)
    }

}

const citiesControllers = {
    getDepart,
    getArrival
}

export default citiesControllers