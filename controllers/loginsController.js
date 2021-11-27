const { User, Hotel } = require('../models');
const { Router } = require('express');

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
        if (type == "user") {
            const user = await User.findOne({
                where: {
                    email: email,
                    password: password
                }
            });

            if (user) {
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
                    email: email,
                    password: password
                }
            });
            if (hotel) {
                req.session.login = true;
                req.session.userid = hotel.id;
                req.session.userType = type;
                console.log("passou");
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