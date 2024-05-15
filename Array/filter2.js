Array.prototype.filter2 = function(callback){
    const NewArray = []
    for(let i = 0; i <this.length; i++){
        if(callback(this[i], i, this)){
            NewArray.push(this[i])
        }
    }

    return NewArray
}




const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 20, fragil: true},
    {nome: 'Copo de prastico', preco: 12.48, fragil: false}
]


const caro = produtos => produtos.preco >= 1500
const fragilidade = produtos => produtos.fragil == true

const resultado = produtos.filter2(caro).filter2(fragilidade)

console.log(resultado)
