let a = 3
this.b = 123
this.c = 'ana'
this.d = false

console.log(this.a)
console.log(this.b)

console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//criando variavel maluca

abc = 3 
console.log(global.abc)