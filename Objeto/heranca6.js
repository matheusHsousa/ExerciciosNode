function Aula(nome,videoId){
    this.nome = nome
    this.videoId = videoId
}

const aula = new Aula('Bem vinda a aula',123)
const aula2 = new Aula('Até breve pamonha',234)
const aula3 =new Aula('Ecercicios',1234)

console.log(aula,aula2,aula3)


//simular new

function novo(f,...params){
    const obj = {}
    obj.__proto__= f.protype
    f.apply(obj, params)
    return obj
}

const aula4 = novo(Aula,'Bem vindo',123)
const aula5 = novo(Aula,'ate breve',234)

console.log(aula4,aula5)