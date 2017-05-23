var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./import.properties');
var parsing = require('./csvparsing');
var maps = require("./mapping")
var promise = require('bluebird');
var options = {
    promiseLib: promise
};
var pgp = require('pg-promise')(options);
var config = {
    host: 'localhost',
    port: 5432,
    database: 'petspets',
    user: 'postgres',
    password: 'password'
};


var db = pgp(config);
parsingObj = parsing.getMethod(function(data) {
    for (var i = 0; i < data.length; i++) {
        //to call the mapping method and pass the data to the method
        var result = maps.mappingMethod(data[i]);
        //console.log(result)
        //Insert the data after mapping the json Field values 
        db.none('insert into petdata ("Id", "Animal", "Breed", "Age", "Sex", "Size", "Color", "Status") values ($1,$2,$3,$4,$5,$6,$7,$8)', [data[i].id, data[i].type, data[i].breed, data[i].age, data[i].sex, data[i].size, data[i].color, data[i].status])
    }
});
