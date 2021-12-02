const { Hotel, User } = require('../models');
const { Router } = require('express');
const multer = require('./multer');
const router = Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/hotel', (req, res) => {
    res.render('hotel/registration');
});
router.post('/hotel', multer.single('photo'), async(req, res) => {
    const { company_name, cnpj, telephone, email, password, address, district, cep, number, city, state, country } = req.body;
    //ver: const password2 = await bcrypt.hash(password, saltRounds);

    const photo = req.file.filename;
    try {
        await Hotel.create({ company_name, cnpj, telephone, email, password, address, district, cep, number, city, state, country, photo });
        res.redirect('/login');
    } catch (err) {
        console.log(err);
    }
});
router.get('/user', (req, res) => {
    res.render('user/registration');
});

router.post('/user', async(req, res) => {
    const { first_name, last_name, cpf, birth_date, cellphone, city, state, password, email } = req.body;
    try {
        //ver: const password2 = await bcrypt.hash(password, saltRounds);
        await User.create({ first_name, last_name, cpf, birth_date, cellphone, city, state, password, email });
        res.redirect('/login');
    } catch (err) {
        console.log(err);
        res.redirect('/login');
    }
});

module.exports = router;