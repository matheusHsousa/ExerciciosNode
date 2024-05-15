function recebePrimeiroUltimo(elementos){
    const primeiroElento = elementos.shift()
    const UltimoElento = elementos.pop()

    return [primeiroElento,UltimoElento]
}

 let array = recebePrimeiroUltimo(['Banana','Maça','Laranja'])
 console.log(array)