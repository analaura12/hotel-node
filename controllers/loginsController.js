const { User, Hotel } = require('../models');
const { Router } = require('express');
const bcrypt = require('bcrypt');
const router = Router();

router.get('/', (req, res) => {
    res.render('login');
});
router.get('/logoff', (req, res) => { //atualizar no profile
    req.session.destroy();
    res.redirect('/login');
});
router.post('/', async(req, res) => {
    const { password, email, type } = req.body;
    try {
        req.session.login = false;
        let sucesso = false;
        if (type == "user") {
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (user) {
                sucesso = await bcrypt.compareSync(password, user.password);
            }
            if (sucesso) {
                req.session.login = true;
                req.session.userid = user.id;
                req.session.userType = type;
                res.redirect('/user');
            } else {
                res.redirect('/login');
            }
        } else {
            const hotel = await Hotel.findOne({
                where: {
                    email: email
                }
            });
            if (hotel) {
                sucesso = await bcrypt.compareSync(password, hotel.password);
            }
            if (sucesso) {
                req.session.login = true;
                req.session.userid = hotel.id;
                req.session.userType = type;
                res.redirect('/hotel');
            } else {
                res.redirect('/login');
            }
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;