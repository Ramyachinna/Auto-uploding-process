var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./import.properties');
var parsing = require('./csvparsing');


function mappingMethod(data) {


    if ((data.type == "dog") | (data.type == "cat") | (data.type == "horse")) {
        data.type = properties.get(data.type);
    }
    if ((data.sex == "male") | (data.sex == "female")) {
        data.sex = properties.get(data.sex);
    }
    if ((data.size == "Small") | (data.size == "Medium") | (data.size == "Large")) {
        data.size = properties.get(data.size);
    }
    if ((data.status == "InHouse") | (data.status == "Homestay")) {
        //console.log(data.status)
        data.status = properties.get(data.status);
    }
    return data;

};

exports.mappingMethod = mappingMethod;

