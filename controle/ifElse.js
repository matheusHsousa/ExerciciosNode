const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('aprovado')
    }/*else if(nota == String){
        console.log('valor invalido') num funciona
    } */else{
        console.log('reprovado')
    }
}
imprimirResultado(8)
imprimirResultado(4)
imprimirResultado('epa')