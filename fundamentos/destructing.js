//novo recurso Ec2015

const pessoa = {
    nome: 'maria',
    idade: 15,
    endereco: {
        logradouro: 'Rua: janet',
        numero: 100,
    }

}



const {nome, idade} = pessoa 
console.log(nome, idade)

const {nome: n , idade: i} = pessoa

const {sobrenome, BemHumorado = true} = pessoa
console.log(sobrenome, BemHumorado)

const {endereco:{logradouro, numero}} = pessoa
console.log(logradouro, numero)

console.log(`Rua ${logradouro}, N${numero}`)