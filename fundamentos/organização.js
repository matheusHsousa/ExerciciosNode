const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso2))

let ava1 = 9.864
let ava2 = 6.876

const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof let)