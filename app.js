const express    = require('express');
const bodyParser = require('body-parser');
const routes     = require('./routes');
const db         = require('./config/database');


const app = express();
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes.init(app);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;