const SaldarPessoa = SaldarPessoa => {
    return {
        falar: () => console.log(`Olá ${SaldarPessoa} !!!`)
    }
}

const saldar = SaldarPessoa('Feuripe')
saldar.falar()
