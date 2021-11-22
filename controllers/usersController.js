const { User } = require('../models');
const { Hotel } = require('../models');
const { Accommodation1 } = require('../models');
const { Reserve } = require('../models');

const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const reserves = await Reserve.findAll();
        const hotels = await Hotel.findAll();
        const accommodation = await Accommodation1.findAll();
        res.render('user/home', { reserves, hotels, accommodation });
    } catch (err) {
        console.log(err);
    }
});

router.get('/registration', (req, res) => {
    res.render('user/registration');
});

router.get('/newReserve', (req, res) => {
    res.render('user/newReserve');
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;

    try {
        let var_reserve = await Reserve.findByPk(id);
        res.render('user/reserve', { var_reserve });
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id/editReserve', async(req, res) => {
    const { id } = req.params;

    try {
        let var_reserve = await Reserve.findByPk(id);
        res.render('user/editReserve', { var_reserve });
    } catch (err) {
        console.log(err);
    }
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

router.post('/', async(req, res) => {
    const { first_name, last_name, cpf, birth_date, cellphone, city, state, password, email } = req.body;
    var _str = birth_date;
    _new = _str.split('-').reverse().join('-');
    console.log(_new);

    try {
        await User.create({ first_name, last_name, cpf, birth_date, cellphone, city, state, password, email });
        res.redirect('/user');
    } catch (err) {
        console.log(err);
    }
});

router.patch('/:id', async(req, res) => {
    const initial_date = req.body.initial_date;
    const final_date = req.body.final_date;

    try {
        await Reserve.update({ initial_date, final_date }, {
            where: { id: req.params.id }
        });
        res.redirect('/user');
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:id', async(req, res) => {

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