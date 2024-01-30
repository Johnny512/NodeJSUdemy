const fs = require("node:fs");
// read the json file buffer to string
const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
// convert back to js object
const data = JSON.parse(dataJSON);
// change details to object
data.name = "Johnny Castillo";
data.age = "40";

console.log(data.name)
// write back to file
const dataString = JSON.stringify(data);
fs.writeFileSync('data.json', dataString);