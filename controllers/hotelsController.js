const { Hotel, Accommodation1, Reserve } = require('../models');
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('hotel/home');
});

router.get('/profile/:id', async(req, res) => {
    const { id } = req.params;
    try {
        let var_hotel = await Hotel.findByPk(id);
        res.render('hotel/profile', { var_hotel });
    } catch (err) {
        console.log(err);
    }
});

router.patch('/:id', async(req, res) => {
    const { company_name, cnpj, telephone, email, password, address, number, district, cep, city, state, country, convenience, observation, social_reason } = req.body;
    console.log("foooi");
    try {
        await Hotel.update({ company_name, cnpj, telephone, email, password, address, number, district, cep, city, state, country, convenience, observation, social_reason }, {
            where: { id: req.params.id }
        });
        console.log("foooi");
        res.redirect('/hotel/');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;