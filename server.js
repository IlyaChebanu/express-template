const app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Listening for connections on port ' + port);
});