const hotelsController = require('./hotelsController');
const usersController = require('./usersController');
const accommodationController = require('./accommodationController');
const reservesController = require('./reservesController');
const registrationsController = require('./registrationsController');
const loginsController = require('./loginsController');

controllers = {
    hotels: hotelsController,
    users: usersController,
    accommodation: accommodationController,
    reserves: reservesController,
    registrations: registrationsController,
    logins: loginsController,
}

module.exports = controllers;