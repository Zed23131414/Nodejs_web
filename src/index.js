const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');
const { engine } = require('express-handlebars');
const app = express();
const fs = require('fs');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
// Tín hiệu đã gửi đi
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLHttpRequest, fetch, axios Gửi dữ liệu vs phuong thức get vs post đều được
//route
app.get('/trang-chu', (req, res) => {
    return res.send('123');
});
// http logger
app.use(morgan('combined'));

app.use(methodOverride('_method'))

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`App listening on port at http://localhost:${port}`);
});
