const hotelsController = require('./hotelsController');
const usersController = require('./usersController');
const accommodationController = require('./accommodationController');
const reservesController = require('./reservesController');

controllers = {
    hotels: hotelsController,
    users: usersController,
    accommodation: accommodationController,
    reserves: reservesController
}

module.exports = controllers;