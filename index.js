const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');


const PORT = 3000;
const mongodb = "mongodb+srv://baongoc_admin:452003Nn@cluster0.ysjpccc.mongodb.net/";
const app = express();
const hbs = exphbs.create({ /* config */ });
//routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const hotelRouter = require('./routes/hotels');
const productRouter = require('./routes/product')

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/user', usersRouter);
app.use('/api/products', productRouter);

app.set('views', './views')
app.set('view engine', 'pug')

mongoose.connect(mongodb, {
})
    .then(() => {
        console.log(">>>>>>>>>> MongoDB Connnected!!!!!!!");
    })
    .catch(err => {
        console.log("Connect Error!", err);
    });


app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});    
module.exports = app;