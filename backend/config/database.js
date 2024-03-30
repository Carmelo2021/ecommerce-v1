const mongoose = require('mongoose');


const URI = `mongodb+srv://ADSOTarde:AOO3ohQ64Jsracms@clusteradsi.nzwbkjo.mongodb.net/pruebadsotarde?retryWrites=true&w=majority`
//console.log(URI)
mongoose.connect(URI);

module.exports = mongoose;

