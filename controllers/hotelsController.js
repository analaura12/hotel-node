const { Hotel, Accommodation1, Reserve } = require('../models');
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('hotel/home');
});

module.exports = router;