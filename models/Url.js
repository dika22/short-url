const mongoose = require('mongoose');  

const schemaOption = {
    collection: "url"
}

const UrlSchema = new mongoose.Schema({  
  	url      : String,
  	kode_url : String,
},schemaOption);

var Url = mongoose.model('Url',UrlSchema);
module.exports = Url;