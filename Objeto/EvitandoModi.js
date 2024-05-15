//Oject.preventExtesions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promoção'
})

console.log('extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Branca'
delete produto.tag

console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Arnmina'
delete pessoa.nome 
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes 

