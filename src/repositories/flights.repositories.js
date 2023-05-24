import db from "../config/database.connection.js";

function get(cityId){
    return db.query(`SELECT * FROM airports`)
}

const flightsRepositories = {
    get
}

export default flightsRepositories