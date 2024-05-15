//armazenar funcao na variacel

const imprimirSoma = function(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// funcao Arrow em uma variavel

const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b) => a - b 
console.log(subtracao(5,3))

const imprimir = a => console.log(a)
imprimir('legal')