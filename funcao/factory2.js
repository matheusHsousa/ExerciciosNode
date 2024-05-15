function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('sabao',45))
console.log(criarProduto('pilha',2.50))

