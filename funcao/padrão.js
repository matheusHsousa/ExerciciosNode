//Usar valor padrão
function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma(1,4,6))
console.log(soma(2))
console.log(soma(1))
console.log(soma(1), soma(3), soma(1,2,3), soma(0,0,0))

//Estrategia usar valores padrão

function soma2(a,b,c){
    a = a !== undefined ? a:1
    b = 1 in arguments ? b:1
    c = isNaN(c) ? 1:c
    return a + b + c

}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//Usando Ecma
function soma3(a=1,b=1,c=1){
    return a + b + c
}
console.log(soma3(2),soma3(1,2,4),soma3(0,0,0))