const fabricantes = ['Mercedes', 'Audi', 'Bmw']

function imprimir(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.push('Ferrari')
fabricantes.forEach(fabricantes => console.log(fabricantes))
