const hotelsController = require('./hotelsController');
const usersController = require('./usersController');
const accommodationController = require('./accommodationController');
const reservesController = require('./reservesController');
const registrationsController = require('./registrationsController');
const loginsController = require('./loginsController');

const hotelAccommodationController = require('./hotelAccommodationController');
const hotelReserveController = require('./hotelReserveController');


controllers = {
    hotels: hotelsController,
    users: usersController,
    accommodation: accommodationController,
    reserves: reservesController,
    registrations: registrationsController,
    logins: loginsController,
    hotelaccomodation: hotelAccommodationController,
    hotelreserve: hotelReserveController,
}

module.exports = controllers;