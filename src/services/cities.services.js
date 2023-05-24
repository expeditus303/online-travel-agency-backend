import citiesRepositories from "../repositories/cities.repositories.js"

async function getAll(){
    const {rows: cities} = await citiesRepositories.getAll()

    return cities
}

async function getArrivalCities(departureCityId){

    const {rows: arrivalCities} = await citiesRepositories.getArrivalCities(departureCityId)

    return arrivalCities
}

const citiesServices = {
    getAll,
    getArrivalCities
}

export default citiesServices