function area(largura,altura){
    const area = altura * largura
    if (area >20){
        console.log(`Valor acima do permitido ${area}`)
    }else{
        return area
    }
}

console.log(area(2,5))
console.log(area(9))
console.log(area())
console.log(area(15,3))
console.log(area(2,3,5,6,7))