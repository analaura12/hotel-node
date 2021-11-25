const express = require('express');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const app = express();
const { User, Hotel } = require('./models');
const { hotels, users, registrations, logins } = require('./controllers')
var methodOverride = require('method-override');

//Traduzir os dados do corpo da requisição para variáveis
app.use(express.urlencoded({ extended: true }));

//Indica que o formato dos dados seja JSON
app.use(express.json());

//Permite fazer requisições de tipos PUT/PATCH/DELETE e etc.
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Sessão
const session = require('express-session');
const sessOptions = {
    secret: 'frasealeatoria',
    resave: false,
    saveUninitialized: false
}
app.use(session(sessOptions));

function verifica_login(req, res, next) {
    if (req.session.login) {
        next();
    } else {
        res.redirect('/login');
    }
}
const verifica_user = (req, res, next) => {
    try {
        if (req.session.userType == "user") {
            return next();
        } else {
            req.session.destroy();
            res.redirect('/login');
        }
    } catch (err) {
        return res.status(401).json({ error: 'Auth' });
    }
}
const verifica_hotel = (req, res, next) => {
    try {
        if (req.session.userType == "hotel") {
            return next();
        } else {
            req.session.destroy();
            res.redirect('/login');
        }
    } catch (err) {
        return res.status(401).json({ error: 'Auth' });
    }
}

app.get('/', (req, res) => {
    res.render('home');
});
app.use('/registration', registrations);
app.use('/login', logins);

app.use(verifica_login);
app.use('/hotel', verifica_hotel, hotels);
app.use('/user', verifica_user, users);

app.get('*', (req, res) => {
    res.send("<h1> Rota não encontrada. </h1>");
});

app.listen(3000, () => {
    console.log("Executando na porta 3000.");
});