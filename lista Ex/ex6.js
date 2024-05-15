function inverter(Parametro){
   const tipo = typeof Parametro
   if(tipo == "boolean"){return !Parametro}
   else if(tipo == "number"){return -Parametro}
   else {return `Booleano ou numero esperado, mas o paramentro é String`}
}

const numero = inverter('banana')
console.log(numero)