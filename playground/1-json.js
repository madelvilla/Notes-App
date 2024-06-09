const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()  //data to string
const user = JSON.parse(dataJSON) //parsing json data

user.name = "Lourdes"
user.age = 26

const userJSON = JSON.stringify(user) //changing new data to string and overwriting old data
fs.writeFileSync('1-json.json', userJSON)