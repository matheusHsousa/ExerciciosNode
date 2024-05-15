class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
const p2 = new Pessoa('Pedro')
p2.falar()

const Criarpessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = Criarpessoa('João')
p3.falar()