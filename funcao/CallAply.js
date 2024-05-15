function getPreco(emposto = 0,moeda = 'R$'){
    return `Produto ${this.Nome} = ${moeda} ${this.preco * (1 - this.desconto) * (1 + emposto)}`
}

const produto = {
    Nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

global.preco = 20
global.desconto = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const moto = {Nome: 'moto', preco: 10200, desconto: 0.30}
const carro = {Nome: 'carro',preco: 49990,desconto: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.apply(moto))

console.log(getPreco.call(carro,0.17,'$'))
console.log(getPreco.apply(moto,[0.17,'$']))