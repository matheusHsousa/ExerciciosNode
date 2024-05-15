function numeros(numero,min,max,paramentro = false){
    if (paramentro == 1){
        return true
    } else if(numero <= min && paramentro == 0){
        return false
    } else if(numero > min && numero < max && paramentro ==0){
        return true
    } else if (numero > min && numero > max && paramentro == 0){
        return false
    }
} 

console.log(numeros(10,50,100))
console.log(numeros(16,100,160))
console.log(numeros(3,3,150))
console.log(numeros(3,3,150,true))
