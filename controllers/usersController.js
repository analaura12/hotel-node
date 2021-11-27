const { User, Hotel, Accommodation1, Reserve } = require('../models');
const { Router } = require('express');
const multer = require('./multer');
const router = Router();

router.get('/', async(req, res) => {
    const idUser = req.session.userid;
    try {
        const reserves = await Reserve.findAll({
            where: { user_id: idUser }
        });
        const hotels = await Hotel.findAll();
        const accommodation = await Accommodation1.findAll();
        res.render('user/home', { reserves, hotels, accommodation, idUser });
    } catch (err) {
        console.log(err);
    }
});

router.get('/profile', async(req, res) => {
    const id = req.session.userid;
    try {
        let var_user = await User.findByPk(id);
        res.render('user/profile', { var_user });
    } catch (err) {
        console.log(err);
    }
});

router.patch('/:id', multer.single('photo'), async(req, res) => {
    const { first_name, last_name, cpf, birth_date, cellphone, city, state, password, email } = req.body;
    try {
        try {
            const photo = req.file.filename;
            await User.update({ first_name, last_name, cpf, birth_date, cellphone, city, state, password, email, photo }, {
                where: { id: req.params.id }
            });
            res.redirect('/user/');
        } catch (err) {
            await User.update({ first_name, last_name, cpf, birth_date, cellphone, city, state, password, email }, {
                where: { id: req.params.id }
            });
            res.redirect('/user/');
        }
    } catch (err) {
        console.log(err);
    }
});

router.delete('/profile/:id', async(req, res) => {
    try {
        await User.destroy({
            where: { id: req.params.id }
        });
        req.session.destroy();
        res.redirect('/login');
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
*/

module.exports = router;