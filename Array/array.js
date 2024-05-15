console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Carlos','Bianca','Josefina','Robisnbaldo')
console.log(aprovados)

aprovados = ['Jamantina', 'carlito', 'Juscicleide']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'pamonha'
aprovados.push('Jeriscreide')
console.log(aprovados.length)

aprovados[9] = 'jerimboca'
console.log(aprovados.length)
console.log(aprovados[7] === undefined)
console.log(aprovados[7] === null)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados  = ['Janderson', 'Jurema','Tito']
aprovados.splice(1, 1)
console.log(aprovados)