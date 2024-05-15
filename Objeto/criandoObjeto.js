//usando notacao literal
const obj = {}
console.log(obj)

//obejto Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcao constrturo
function Produto(nome,preco,desc){
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta',7.99, 0.15)
const p2 = new Produto('notbook',2000,0.25)
console.log(p1.getDesconto(), p2.getDesconto())

//funcao factory

function criarFunc(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario() {
            return(salario/30) * (30 - faltas)
        }

    }
}

const f1 = criarFunc('joao',3000,12)
const f2 = criarFunc('Robinsbal', 4500,4)

console.log(`Funcionario ${f1.nome} recebeu = ${f1.getSalario()},
Funcionario ${f2.nome} recebeu = ${f2.getSalario()}`)

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//funcao famosa que retorn Objeto

const fromJSON = JSON.parse('{"info" : "sou um Json"}') 
console.log(fromJSON.info)