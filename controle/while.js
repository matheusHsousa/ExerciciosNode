function NumerosAleatorios(min,max){
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao= NumerosAleatorios(-1,10)
    console.log(`os valores sorteados ${opcao}`);
}

console.log('ate a proxima')