import { StatusCodes } from "http-status-codes"
import flightsServices from "../services/flights.services.js"

async function get(req, res, next){
    const { cityId } = req.params

    try {
        const flights = await flightsServices.get(cityId)

        res.status(StatusCodes.OK).send(flights)
    } catch (err) {
        next(err)
    }
}

const flightsControllers = {
    get
}

export default flightsControllers