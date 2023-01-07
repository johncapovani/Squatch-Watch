//DEPENDENCIES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//MIDDLEWARE    
app.use(cors());
//allows to parse json
app.use(express.json());

//PUT CONTROLLERS HERE

//where db is stored
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
//once runs a function only one time: in this case, the console.log after the connection is established
connection.once('open', () => {
    console.log('MongoDB db connection established.')
})

//CONTROLLERS
app.use('/sightings', require('./routes/sighting_routes'))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});