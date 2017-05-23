'use strict';
var promise = require('bluebird'); 
var options = {
    promiseLib: promise 
};
var pgp = require('pg-promise')(options);
// Details of Database connection 
var config = {
    host: 'localhost', 
    port: 5432,
    database: 'petspets',
    user: 'postgres',
    password: 'password'
};
 

var db = pgp(config); // database instance;

exports.db = db;