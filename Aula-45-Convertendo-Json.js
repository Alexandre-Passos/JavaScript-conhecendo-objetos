const estudante = require('./estudante.json')

//Convertendo o Json para STRING
const stringEstudante = JSON.stringify(estudante)

console.log(stringEstudante)
console.log(typeof stringEstudante)

console.log('\n')

//Convertendo STRING para Objeto
const objEstudante = JSON.parse(stringEstudante)

console.log(objEstudante)
console.log(typeof objEstudante)