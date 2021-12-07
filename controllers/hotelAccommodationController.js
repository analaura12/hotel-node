const { Hotel, Accommodation1, Reserve } = require('../models');
const { Router } = require('express');
const multer = require('./multer');
const router = Router();

router.get('/', async(req, res) => {
    const id = req.session.userid;
    try {
        let var_hotel = await Hotel.findByPk(id);
        const accommodations = await Accommodation1.findAll({
            where: { hotel_id: var_hotel.id }
        });
        res.render('hotel/accommodation/index', { var_hotel, accommodations });
    } catch (err) {
        console.log(err);
    }
});

router.get('/create', async(req, res) => {
    const id = req.session.userid;
    try {
        let var_hotel = await Hotel.findByPk(id);
        res.render('hotel/accommodation/create', { var_hotel });
    } catch (err) {
        console.log(err);
    }
});

router.get('/edit/:id', async(req, res) => {
    const id_hotel = req.session.userid;
    const { id } = req.params;
    try {
        let var_hotel = await Hotel.findByPk(id_hotel);
        const accommodation = await Accommodation1.findOne({
            where: { id: id }
        });
        res.render('hotel/accommodation/edit', { accommodation, var_hotel });
    } catch (err) {
        console.log(err);
    }
});


router.post('/store', multer.single('photo'), async(req, res) => {
    const { number, value, number_of_guests, description, convenience, observation, hotel_id } = req.body;
    const photo = req.file.filename;
    try {
        await Accommodation1.create({ number, value, number_of_guests, description, convenience, observation, hotel_id, photo });
        res.redirect('/hotel/accommodation');
    } catch (err) {
        console.log(err);
    }
});

router.get('/destroy/:id', async(req, res) => {
    console.log(req.body);
    try {
        await Accommodation1.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/hotel/accommodation');
    } catch (err) {
        console.log(err);
    }
});


router.patch('/update/:id', multer.single('photo'), async(req, res) => {
    const { number, value, number_of_guests, description, convenience, observation, hotel_id} = req.body;

    try {
        try {
            const photo = req.file.filename;
            await Accommodation1.update({
                number, value, number_of_guests, description, convenience, observation, hotel_id, photo }, {
                where: { id: req.params.id }
            });
            res.redirect('/hotel/accommodation');
        } catch (err) {
            await Accommodation1.update({ 
                number, value, number_of_guests, description, convenience, observation, hotel_id, photo }, {
                where: { id: req.params.id }
            });
            res.redirect('/hotel/accommodation');
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;