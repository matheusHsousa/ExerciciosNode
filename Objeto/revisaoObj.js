//colecao dinamica de pares chave valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
console.log(produto['marca do produto'])
produto.preco= 220
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        Nome:'Raul',
        sobrenome:'Sousa',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
        nome: 'Junior',
        idade: 19 
        },
        {
            nome: 'ana',
            idade: 42
        }
    ],
    calcularValorDoArray: function(){
        // ...
    }
}


carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoArray
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)