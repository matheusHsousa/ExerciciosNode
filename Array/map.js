const nums = [1,2,3,4,5]
//nums.forEach(nums =>console.log(nums) )

let resul = nums.map(function(e){
    return e * 2
})


resul.forEach(resul => console.log(resul))

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`


let soma = nums.map(soma10).map(paraDinheiro)
let triploResul = nums.map(triplo).map(paraDinheiro) 
resul = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(soma)
console.log(triploResul)
console.log(resul)