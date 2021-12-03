const { User, Hotel, Accommodation1, Reserve } = require('../models');
const { Router } = require('express');

const router = Router();

router.get('/myReserves', async(req, res) => {
    const user_id = req.session.userid;
    try {
        const reserves = await Reserve.findAll({
            where: { user_id: user_id }
        });
        res.render('reserve/myReserves', { reserves });
    } catch (err) {
        console.log(err);
    }
});

router.get('/newReserve/:idAccommodation/:idHotel', async(req, res) => {
    const { idAccommodation, idHotel } = req.params;
    req.session.hotel_id = idHotel;
    req.session.accommodation_id = idAccommodation;
    try {
        const accommodation = await Accommodation1.findByPk(idAccommodation);
        const hotels = await Hotel.findByPk(idHotel);
        const reserves = await Reserve.findAll();
        res.render('reserve/newReserve', { hotels, accommodation, reserves });
    } catch (err) {
        console.log(err);
    }
});

router.post('/new', async(req, res) => {
    const hotel_id = req.session.hotel_id;
    const accommodation_id = req.session.accommodation_id;
    const user_id = req.session.userid;
    const status = "Pendente";
    const { initial_date, final_date, number_of_guests, observation } = req.body;

    try {
        await Reserve.create({ initial_date, final_date, number_of_guests, observation, status, hotel_id, user_id, accommodation_id });
        res.redirect('/reserves/myReserves');
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const reserves = await Reserve.findByPk(id);
        const hotels = await Hotel.findByPk(reserves.hotel_id);
        const accommodation = await Accommodation1.findByPk(reserves.accommodation_id);
        res.render('reserve/reserve', { reserves, hotels, accommodation });
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id/editReserve', async(req, res) => {
    const { id } = req.params;
    try {
        let var_reserve = await Reserve.findByPk(id);
        res.render('reserve/editReserve', { var_reserve });
    } catch (err) {
        console.log(err);
    }
});

router.patch('/:id', async(req, res) => {
    const { initial_date, final_date } = req.body;
    try {
        await Reserve.update({ initial_date, final_date }, {
            where: { id: req.params.id }
        });
        res.redirect('/user');

    } catch (err) {
        console.log(err);
    }
});

router.delete('/delete/:id', async(req, res) => {
    try {
        await Reserve.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/user');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;