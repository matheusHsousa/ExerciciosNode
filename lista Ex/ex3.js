const salario = function salario(horas, recebe){
    return horas * recebe
}

const falarSalario = falarSalario => {
    return {
        falar: () => console.log(`Olá, ${falarSalario} vc recebera ${trabalhado}`)
    }
}

const trabalhado = salario(150,40.5)
const saldar = falarSalario('jose')

saldar.falar()
