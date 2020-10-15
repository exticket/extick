const mongoose = require("mongoose");


const connectionString = new URL('mongodb+srv://jacob123:HVG33kMxXTztMCy@cluster0.hboiu.mongodb.net/ExtickCopyDB?retryWrites=true&w=majority');

if (process.env.NODE_ENV === "production") {
    connectionString.pathname = 'extick';
}

// mongoose.set('debug', true)

mongoose.connect(connectionString.toString(),
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connected to ${connectionString.pathname} database on mongodb atlas`))
    .catch(error => { console.error('Connection error', error.message) })


const db = mongoose.connection
module.exports = db


