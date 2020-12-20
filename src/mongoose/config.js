'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Roa:bGb2P4DHNzTZCTnB@clusterroa.zi7oh.mongodb.net/<dbname>?retryWrites=true&w=majority');

module.exports = mongoose;