const alunos = [
    {nome: 'janaina', nota: 7.9}, 
    {nome: 'calinca', nota: 3}
]


//abordagem imperativa
let total = 0
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
resultado = total/ alunos.length

console.log(resultado)

//declarativa

const getNota = alunos => alunos.nota
const soma = (total,valorAtual) =>  total + valorAtual

const tota2 = alunos.map(getNota).reduce(soma)
console.log(tota2/alunos.length)