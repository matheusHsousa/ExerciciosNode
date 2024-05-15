const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',

]

const paraObjeto = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco
const paraDinheiro = produto => `R$ ${produto.toFixed(2)}`


const resultado = carrinho.map(paraObjeto).map(apenasPrecos).map(paraDinheiro)
console.log(resultado)