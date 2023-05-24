import flightsRepositories from "../repositories/flights.repositories.js"

async function get(cityId){
    const {rows: flights} = await flightsRepositories.get(cityId)

    return flights
}

const flightsServices = {
    get
}

export default flightsServices