const mongoose = require('../../mongoose/config')
const imageSchema = require('./imagesSchema').imageSchema;

const models = {

Images: mongoose.model('images', imageSchema)

};

module.exports = models;