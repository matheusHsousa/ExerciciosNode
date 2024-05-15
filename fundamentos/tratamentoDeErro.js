/*function tratarErroELancar(erro){
    throw new Error( '...')
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUppercase() + '!!!')        
    } catch(e){
        tratarErroELancar(e)
    }
}

const obj = {nome: 'roberto'}

imprimirNomeGritado(obj)*/


function tratarErroELancar2(erro2){
    //throw new Error('Ta maluco doido')
    //throw 404
    throw {
        Nome: erro2.name,
        msg: erro2.msg,
        date: new Date,
        id: 404
    }
}


function imprimirNomeSusurrando(sussur){
  try{  
    console.log(sussur.name.toUpperCase())
} catch(a){
    tratarErroELancar2(a)
} finally{
    console.log('Final')
}
}

const sussur = {nome: 'joao'}

imprimirNomeSusurrando(sussur)