const valor = [1.3,2.3,3.3]
console.log(valor[0], valor[2])

valor[4] = 10
console.log(valor.length)
valor.push({id: 3}, false, null, 'teste')
console.log(valor)

console.log(valor.pop())
delete valor[0]

console.log(valor)

console.log(typeof valor)