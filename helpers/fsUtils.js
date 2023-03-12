const fs = require('fs');
const util = require('util');
const {v4: uuid4} = require('uuid');


const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
fs.writeFile('./db/db.json', JSON.stringify(note))

module.exports = { readFromFile, writetoFile, readAndAppend };