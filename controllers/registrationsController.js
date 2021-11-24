const { Hotel, User } = require('../models');
const { Router } = require('express');
const router = Router();

router.get('/hotel', (req, res) => {
    res.render('hotel/registration');
});
router.post('/hotel', async(req, res) => {
    const { company_name, cnpj, telephone, email, password, address, district, cep, number, city, state, country } = req.body;
    try {
        await Hotel.create({ company_name, cnpj, telephone, email, password, address, district, cep, number, city, state, country });
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
        await User.create({ first_name, last_name, cpf, birth_date, cellphone, city, state, password, email });
        res.redirect('/login');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;