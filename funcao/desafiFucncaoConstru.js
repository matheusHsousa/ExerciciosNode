/*class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()*/

function Pessoa(nome){
    this.nome = nome

    this.falar = () => console.log(`Olá caro amigo ${nome}`)
}

const p1 = new Pessoa('Pamonha')
p1.falar()
