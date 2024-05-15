const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//sem callback

const notasbaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasbaixas.push(notas[i])
    }
}

const notasAltas = []
for(let i in notas){
    if(notas[i] > 7){
        notasAltas.push(notas[i])
    }
}
console.log(notasAltas)

console.log(notasbaixas)

//usando callBack

const notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasbaixas2)

const funcNotas = notas => notas < 7

const notasBaixas3 = notas.filter(funcNotas)
console.log(notasBaixas3)


const funcNotasAltas = notas => notas > 7
const notasAltas2 = notas.filter(funcNotasAltas)
console.log(notasAltas2)


