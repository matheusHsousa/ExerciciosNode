//Cadeia de prototipos
Object.prototype.atrib0 = '0' //nao faça isso
const avo = {atrib1: 'A'}
const pai = {__proto__:avo, atrib2: 'B'}
const filho = {__proto__:pai, atrib3: 'C'}
console.log(filho.atrib0, filho.atrib1,filho.atrib2,filho.atrib3)


const carro = {
    veloAtual: 0,
    veloMax: 200,
    acelerarMais(delta){
        if(this.veloAtual + delta <= this.veloMax){
            this.veloAtual += delta
        }else {
            this.veloAtual = this.veloMax
        }
    },
    status(){
        return `${this.veloAtual}Km/h , ${this.veloMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    veloMax: 324 //shadowing
}
const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo.status)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())