const mongoose = require('mongoose');
const { DBURL, DBNAME } = require('./constants');
const db = mongoose.connect(`${DBURL}`, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: `${DBNAME}`,

}).then(() => console.log('DATABASE CONNECTED SUCCESSFULLY'))

module.exports = db;