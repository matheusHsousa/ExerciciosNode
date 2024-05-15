//Closures é o escopo criado quando uma funcao é declarada
//este escopo vai permitir a funcao acessar e manipular variaveis externas a funcao


//contexto lexico em acao

const valor = 'Global'

function fora(){
    const valor = 'local'
        function dentro(){
            return valor
        }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
