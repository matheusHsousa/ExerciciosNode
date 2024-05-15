function getNumeroAleatorio(min,max){
    const rand = Math.random() * (max - min) + min
    return Math.floor(rand)
}

let opcao = -1 

do{
    opcao = getNumeroAleatorio(-1,10)
    console.log(`O nuemro escolhido ${opcao}`)
} while(opcao !=-1)