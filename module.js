// const names = require('./names')
// const sayHi = require('./utils')
// const data = require('./alternative')
// console.log(names)
// console.log(data)
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`the systtem uptime is ${os.uptime()} seconds`)
const currentOs={
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem(),
}
console.log(currentOs)