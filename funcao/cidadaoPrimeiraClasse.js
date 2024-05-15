//funcao de Js é First-class Object (Citizeans)
//Higth-Order

//forma literal
function fun1(){

}
//armazenaar na variavel

const fun2 = function(){

}
//armazernar em array
const array = [function(a,b){
    return a+b
},
fun1,fun2]
console.log(array[0](2,3))

//armazenar atributo em objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando')})

//funcao pode retornar ou conter uma funcao

function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(1,4)(9)
const cincoMais = soma(1,4)
cincoMais(9)