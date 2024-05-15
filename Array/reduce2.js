const alunos = [
    {nome:'joao', nota: 7.3, bolsita: false},
    {nome:'maria', nota: 9.2, bolsita: true},
    {nome:'pedro', nota: 9.8, bolsita: false},
    {nome:'ana', nota: 8.7, bolsita: true}
]


//todos sao bolsistas?
const bolsita = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a => a.bolsita).reduce(bolsita))

//algum bolsista

const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsita).reduce(algumBolsista))