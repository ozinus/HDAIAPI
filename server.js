var cors = require('cors');

var express = require ('express'), 
  app = express(),
  port = process.env.PORT || 3002, 
  mongoose = require('mongoose'),
  Patient = require('./api/models/hdaiModel'), 
  bodyParser = require('body-parser');
  app.use(cors());

// mongoose url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PatientsDB', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/hdaiRoutes'); //route details...
routes(app); 
app.listen (port);

console.log('Ready to talk to MongoDb ...'+ port); 
