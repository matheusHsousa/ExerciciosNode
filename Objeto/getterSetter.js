const sequencia = {
    _valor: 1, //convencao
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }

    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 7
console.log(sequencia.valor, sequencia.valor)
