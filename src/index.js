const express = require('express');
var { engine } = require('express-handlebars');
var morgan = require('morgan');
var path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// app.use(morgan('combined'))

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
