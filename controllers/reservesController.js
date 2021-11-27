const { User, Hotel, Accommodation1, Reserve } = require('../models');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
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
        res.redirect('/user/');

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

/*
router.get('/newReserve', (req, res) => {
    res.render('reserve/newReserve');
});

router.post('/new', async(req, res) => {
    const { id, number, initial_date, final_date } = req.body;

    try {
        await Reserve.create({ id, number, initial_date, final_date });
        res.redirect('/user');
    } catch (err) {
        console.log(err);
    }
});
*/

module.exports = router;