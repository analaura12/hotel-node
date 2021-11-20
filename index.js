const express = require('express');
const path = require('path');
const app = express();
const { hotels, users, accommodation, reserves } = require('./controllers')
var methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('__method')); //Permite fazer requisições do tipo put/patch/delet etc...

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//ROTAS:
app.get('/', (req, res) => {
    res.render('home');
});

app.use('/user', users);
app.use('/hotel', hotels);
app.use('/accommodation', accommodation);
app.use('/reserves', reserves);

app.get('*', (req, res) => {
    res.send("<h1> Rota não encontrada. </h1>");
});

app.listen(3000, () => {
    console.log("Executando na porta 3000.");
});