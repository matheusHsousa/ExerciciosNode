
function bota(a,b){
    
    let arrayRepetido = []

    for(i=0;i<b;i++){
        arrayRepetido.push(a)
    }
 
    return arrayRepetido
}

console.log(bota(7,3))
console.log(bota('CODIGO',2))