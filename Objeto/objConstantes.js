const pessoa = {nome: 'Joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa recebe novo obj
//pessoa = {nome: 'ANA'}

Object.freeze(pessoa) //deixa objeto constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)