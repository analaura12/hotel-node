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
        const accommodation = await Accommodation1.findAll({
            where: { hotel_id: idHotel }
        });
        res.render('hotel/home', { reserves, accommodation, idHotel });
    } catch (err) {
        console.log(err);
    }
});

router.get('/profile', async(req, res) => {
    const id = req.session.userid;
    try {
        let var_hotel = await Hotel.findByPk(id);
        res.render('hotel/profile', { var_hotel });
    } catch (err) {
        console.log(err);
    }
});

router.patch('/:id', multer.single('photo'), async(req, res) => {
    const { company_name, cnpj, telephone, email, password, address, number, district, cep, city, state, country, convenience, observation, social_reason } = req.body;

    try {
        try {
            const photo = req.file.filename;
            await Hotel.update({ company_name, cnpj, telephone, email, password, address, number, district, cep, city, state, country, convenience, observation, social_reason, photo }, {
                where: { id: req.params.id }
            });
            res.redirect('/hotel');
        } catch (err) {
            await Hotel.update({ company_name, cnpj, telephone, email, password, address, number, district, cep, city, state, country, convenience, observation, social_reason }, {
                where: { id: req.params.id }
            });
            res.redirect('/hotel');
        }
    } catch (err) {
        console.log(err);
    }
});

router.delete('/profile/:id', async(req, res) => {
    try {
        await Hotel.destroy({
            where: { id: req.params.id }
        });
        req.session.destroy();
        res.redirect('/login');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;