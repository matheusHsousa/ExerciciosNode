const pai = {
    nome: 'Pedro',
    corCab: 'Preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Joana'
console.log(filha1.corCab)

const filha2 = Object.create(pai, {
    nome: {value:'Bianca', writable: false, enumerable:true}
})

console.log(filha2.nome)
filha2.nome = 'Josefina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCab}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    if(filha2.hasOwnProperty(key) == true){ 
        console.log(key)}
    else{ console.log(`por herança ${key}`)}
}