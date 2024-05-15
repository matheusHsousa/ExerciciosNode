class Avo {
    constructor(sobrenome){
    this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor(sobrenome,profissao = 'prof'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
const pai = new Pai

console.log(pai)
console.log(filho) 