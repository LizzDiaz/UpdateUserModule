require("express")

const router = require("../components/main/network")
const main = require("../components/main/network")

const allRoutes = require("../utils/constants/routes.json")

//arrow function - funciones de flecha s

const routes = server => { 
    server.use(allRoutes.main, main)
}

module.exports = routes;