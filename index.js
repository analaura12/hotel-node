const express = require('express');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const app = express();
const { User, Hotel } = require('./models');
const { hotels, users, registrations, accommodation, reserves } = require('./controllers')
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

//Login
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/logoff', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});
app.post('/login', async(req, res) => {
    const { password, email, type } = req.body;
    try {
        req.session.login = false;
        req.session.login = false;
        if (type == "user") {
            const SpecificUser = await User.findOne({
                where: {
                    email: email,
                    password: password
                }
            });
            if (SpecificUser) {
                req.session.login = true;
                console.log(SpecificUser);
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

//ROTAS:
app.get('/', (req, res) => {
    res.render('home');
});
app.use('/registration', registrations);

app.use(verifica_login);
app.use('/hotel', hotels);

app.use(verifica_login);
app.use('/user', users);



app.get('*', (req, res) => {
    res.send("<h1> Rota não encontrada. </h1>");
});

app.listen(3000, () => {
    console.log("Executando na porta 3000.");
});