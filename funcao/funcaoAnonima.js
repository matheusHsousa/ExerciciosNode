const soma = function (x,y){
    return x + y
}

const imprimirResultado = function (a,b, opecao = soma){
    console.log(opecao(a,b))
}
imprimirResultado(3,5)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function(x,y){
    return x-y
})
imprimirResultado(3,4, (x,y) => x*y)

const pessoa = {
    falar: function(){
        console.log('opa')
    }
}
pessoa.falar()