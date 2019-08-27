let express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser');
    // controller = require('./controller');
    require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(process.env.PORT);
console.log('RESTful API server started on: ' + process.env.PORT);