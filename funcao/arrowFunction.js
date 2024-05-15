let dobro = function(a){
    return 2*a
}

dobro = (a)=>{
    return 2 * a
}

let dobro2 = a => 2*a //return implicito

console.log(dobro2(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())