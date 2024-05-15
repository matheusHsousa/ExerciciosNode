Array.prototype.map2 = function(callback){
    const NewArray = []
    for(let i=0;i<this.length;i++){
        NewArray.push(callback(this[i], i, this))
    }
    return NewArray
}



const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',

]

const paraObjeto = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco
const paraDinheiro = produto => `R$ ${produto.toFixed(2)}`


const resultado = carrinho.map2(paraObjeto).map2(apenasPrecos).map2(paraDinheiro)
console.log(resultado)