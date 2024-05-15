const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito de paradigmas: func e OO

const falarDePessoas = pessoa.falar.bind(pessoa)
falarDePessoas()

console.log(falarDePessoas)