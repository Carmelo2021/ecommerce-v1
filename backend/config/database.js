const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USER_BD}:${process.env.PASS_BD}@clusteradsi.nzwbkjo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
console.log(URI)
mongoose.connect(URI);

module.exports = mongoose;

