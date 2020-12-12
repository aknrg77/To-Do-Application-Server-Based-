const mongoose = require('mongoose');
const env = require('../config/environment');


mongoose.connect(env.databaseURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }).then(() => console.log('DB Connected!')).catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });

const db = mongoose.connection;



module.exports = db;