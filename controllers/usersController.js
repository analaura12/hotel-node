const { User, Hotel, Accommodation1, Reserve } = require('../models');

const { Router } = require('express');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const reserves = await Reserve.findAll({
            include: [
                { model: Hotel }
            ]
        });
        const hotels = await Hotel.findAll();
        const accommodation = await Accommodation1.findAll();
        res.render('user/home', { reserves, hotels, accommodation });
    } catch (err) {
        console.log(err);
    }
});


router.get('/profile/:id', async(req, res) => {
    const { id } = req.params;
    try {
        let var_user = await User.findByPk(id);
        res.render('user/profile', { var_user });
    } catch (err) {
        console.log(err);
    }
});

router.patch('/:id', async(req, res) => {
    const { first_name, last_name, cpf, birth_date, cellphone, city, state, password, email } = req.body;

    try {
        await User.update({ first_name, last_name, cpf, birth_date, cellphone, city, state, password, email }, {
            where: { id: req.params.id }
        });
        res.redirect('/user/');
    } catch (err) {
        console.log(err);
    }
});

/*
router.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const var_reserve = await Reserve.findByPk(id);
        res.render('user/reserve', { var_reserve });
    } catch (err) {
        console.log(err);
    }
});

router.get('/newReserve', (req, res) => {
    res.render('user/newReserve');
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
*/

module.exports = router;