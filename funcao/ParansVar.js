function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,4,6,7,8))
console.log(soma(1,4,6,7,8,'teste'))
console.log(soma('a','b','c'))

