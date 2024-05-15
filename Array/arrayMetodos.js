const pilotos = ['vettel', 'alonso', 'massa','raikkonen']
pilotos.pop()//massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice add e remove elementos

pilotos.splice(2,0,'corredor','Bottas')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

