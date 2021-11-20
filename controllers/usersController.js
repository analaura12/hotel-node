const { User } = require('../models');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('user/home');
});


router.get('/apresenta', async(req, res) => {
    const usuarios = await User.findAll();
    res.render('teste', { usuarios });
});

module.exports = router;