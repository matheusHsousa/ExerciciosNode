function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado doido') 
    }

}
soBoaNoticia(10)
soBoaNoticia(2)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade... ${valor}`)
    }else {
        console.log(`Fake News mano`)
    }
}
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo()
seForVerdadeEuFalo(1)