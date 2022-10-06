const express = require('express');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4000

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())



mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
  res.send('Assignment1')
})

require('./app/routes/news.route')(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})