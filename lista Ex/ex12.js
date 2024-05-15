function removerObjetos(objeto, nomePropriedade){
    const copia = {...objeto}
    delete copia[nomePropriedade]
    
    return copia
}

const obj = removerObjetos({a:1,b:2,c:3},"a")
console.log(obj)