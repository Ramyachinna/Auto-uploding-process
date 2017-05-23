var csvFilePath = './pets.csv'
var csv = require('csvtojson')
global.data = [];

function getMethod(callback) {
    csv()
        .fromFile(csvFilePath)
        .on('json', (jsonObj) => {
            var value = jsonObj
            data.push(value);

        })
        .on('done', (error) => {
            callback(data);
            console.log('------------------------------------------------------>')
            console.log('****The data inserted Sucessfully into the database****')
            console.log('<------------------------------------------------------')
        })
}
exports.getMethod = getMethod;
