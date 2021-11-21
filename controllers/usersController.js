const { User } = require('../models');
const { Hotel } = require('../models');
const { Accommodation1 } = require('../models');
const { Reserve } = require('../models');

const { Router } = require('express');
const router = Router();

let quartos = [{
        number: 266,
        value: 150.99,
        number_of_guests: 3,
        company_name: 'Grand Hyatt São Paulo'
    },
    {
        number: 12,
        value: 120.00,
        number_of_guests: 1,
        company_name: 'The Yellow Capsule'
    }
];
/*
let reservas = [{
        id: 1,
        number: 10,
        initial_date: '2021-11-27',
        final_date: '2021-11-30'
    },
    {
        id: 2,
        number: 50,
        initial_date: '2021-12-27',
        final_date: '2021-12-30'
    }
];
*/
router.get('/', async(req, res) => {
    const reservas = await Reserve.findAll();
    res.render('user/home', { quartos, reservas });
});

router.get('/newReserve', (req, res) => {
    res.render('user/newReserve');
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    let var_reserve = await Reserve.findByPk(id);
    res.render('user/reserve', { var_reserve });
});

router.get('/:id/editReserve', async(req, res) => {
    const { id } = req.params;
    let var_reserve = await Reserve.findByPk(id);
    res.render('user/editReserve', { var_reserve });
});

router.post('/', async(req, res) => {
    const { id, number, initial_date, final_date } = req.body;
    await Reserve.create({ id, number, initial_date, final_date });
    res.redirect('/user');
});

router.patch('/:id', async(req, res) => {
    const initial_date = req.body.initial_date;
    const final_date = req.body.final_date;

    await Reserve.update({ initial_date, final_date }, {
        where: { id: req.params.id }
    });

    res.redirect('/user');
});

router.delete('/:id', async(req, res) => {
    await Reserve.destroy({
        where: { id: req.params.id }
    });
    res.redirect('/user');
});

module.exports = router;