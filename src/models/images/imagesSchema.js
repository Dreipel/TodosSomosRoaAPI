const mongoose = require('../../mongoose/config'),
      Schema = mongoose.Schema;

const schemas = {

    imageSchema: new Schema({
        url: {type: String},
        nameOfContributor: {type: String},
    })

};

module.exports = schemas;