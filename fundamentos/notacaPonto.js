console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome 
    this.exec = function(){
        console.log('Exec...')
    }
}

function Banana(valor){
    this.valor = valor
}

const obj4 = new Banana('10')

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj4.valor)

obj3.exec()