import db from "../config/database.connection.js";

function getDepart(){
    return db.query(`SELECT * FROM cities`)
}

function getArrival(departureCityId) {
    return db.query(`
    SELECT DISTINCT arrival_city.*
    FROM flights
        JOIN airports AS departure_airport ON flights.id_airport_depart = departure_airport.id
        JOIN airports AS arrival_airport ON flights.id_airport_arrival = arrival_airport.id
        JOIN cities AS arrival_city ON arrival_city.id = arrival_airport.id_city
    WHERE
        departure_airport.id_city = $1;
    `, [departureCityId])
}

const citiesRepositories = {
    getDepart,
    getArrival
}

export default citiesRepositories