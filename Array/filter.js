const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 20, fragil: true},
    {nome: 'Copo de prastico', preco: 12.48, fragil: false}
]

console.log(produtos.filter(function(p){
    return  false 
}))

console.log(produtos.filter(function(p){
    return p.fragil == true && p.preco > 1500
}))

const caro = produtos => produtos.preco >= 1500
const fragilidade = produtos => produtos.fragil == true

const resultado = produtos.filter(caro).filter(fragilidade)

console.log(resultado)

