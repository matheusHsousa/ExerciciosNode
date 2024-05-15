const quaseArrei = {0:'Rafael', 1:'Jamantina', 2:'curosaque', 3:'pamela'}

console.log(quaseArrei)
Object.defineProperty(quaseArrei,'toString',{
    value: function() {return Object.values(this)},
    enumerable: false
})


const arrayVerdadeiro = ['rafael', 'Jamantina', 'curosaque', 'pamela']
console.log(arrayVerdadeiro, quaseArrei.toString())