import citiesRepositories from "../repositories/cities.repositories.js"

async function getDepart(){
    const {rows: cities} = await citiesRepositories.getDepart()

    return cities
}

async function getArrival(departureCityId){

    const {rows: arrivalCities} = await citiesRepositories.getArrival(departureCityId)

    return arrivalCities
}

const citiesServices = {
    getDepart,
    getArrival
}

export default citiesServices