const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Jerico',
        nota: 2.5
    },{
        nome: 'Jeriboao',
        nota: 3.5
    },{
        nome: 'Tilambucan',
        nota: 10
    }]    
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Janderson',
        nota: 7.0
    },{
        nome: 'Cibita',
        nota: 8
    }]
}]

const getNota = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callBack){
    return Array.prototype.concat.apply([], this.map(callBack))
}

const nota2 = escola.flatMap(getNotaTurma)
console.log(nota2)
