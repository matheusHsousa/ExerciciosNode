function compras(trabalho1,trabalho2){
    const compraSorvete = trabalho1 || trabalho2 
    const comprarTv50 = trabalho1 && trabalho2
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete

    return {compraSorvete, comprarTv32, comprarTv50, manterSaudavel}
}


function banana() {
    if(compras.comoraSorvete = true){
    console.log('Comprei')
} else{
    console.log('N comprei')
}
if(compras.comprarTv32 = true){
    console.log('Comprei')
} else{
    console.log('N comprei')
}
if(compras.comprarTv50 != true){
    console.log('Comprei')
} else{
    console.log('N comprei')
}
if(compras.manterSaudavel != true){
    console.log('Comprei')
} else{
    console.log('N comprei')
}
}


console.log(compras(false, true))
console.log(banana())


/*console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))*/