const aprovados = ['Juinho', 'girgolino', 'parminondas']

aprovados.forEach(function(nome,indice,Array){
    console.log(`${indice + 1} = ${nome}`)
    console.log(Array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovados, indice) =>console.log(`${indice + 1} = ${aprovados}`)
aprovados.forEach(exibirAprovados)