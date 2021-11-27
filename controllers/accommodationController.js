const { Hotel, Accommodation1, Reserve } = require('../models');
const { Router } = require('express');
const multer = require('./multer');
const router = Router();

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const accommodation = await Accommodation1.findByPk(id);
        const reserves = await Reserve.findAll();
        const hotels = await Accommodation1.findByPk(accommodation.hotel_id);
        var testando = '2021-10-27';
        res.render('accommodation/accommodation', { reserves, hotels, accommodation, testando });
    } catch (err) {
        console.log(err);
    }
});

router.get('/hotel/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const hotels = await Hotel.findOne({
            where: { id: id }
        });
        const accommodation = await Accommodation1.findAll({
            where: { hotel_id: id }
        });
        res.render('accommodation/hotel', { accommodation, hotels });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;