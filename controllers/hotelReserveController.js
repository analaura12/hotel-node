const { Hotel, Accommodation1, Reserve } = require('../models');
const multer = require('./multer');
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    const idHotel = req.session.userid;
    try {
        const reserves = await Reserve.findAll({
            where: { hotel_id: idHotel }
        });
        res.render('hotel/reserve/index', { reserves, idHotel });
    } catch (err) {
        console.log(err);
    }
});

router.get('/approve/:id', async(req, res) => {
    const id_hotel = req.session.userid;
    const { id } = req.params;

    try {
        await Reserve.update({status: 'Aprovado'}, {
            where: { id: req.params.id }
        });

        res.redirect('/hotel/reserve');
    } catch (err) {
        console.log(err);
    }
});


router.get('/disapprove/:id', async(req, res) => {
    const id_hotel = req.session.userid;
    const { id } = req.params;

    try {
        await Reserve.update({status: 'Desprovado'}, {
            where: { id: req.params.id }
        });

        res.redirect('/hotel/reserve');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
