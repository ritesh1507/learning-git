import add from './add.js'
import power from './power.js'

const a=12
const b=5
let result1=0
let result2=0

result1 = add(a,b)
console.log(`sum of ${a} and ${b} is ${result1}`)

result2 = power(a,b)
console.log(`${a} to the power ${b} is ${result2}`)