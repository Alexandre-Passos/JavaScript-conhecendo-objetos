// Exemplo de importação de um módulo em Node.js
const estudante = require('./estudante.json')

const chave = Object.keys(estudante)
const valor = Object.values(estudante)
console.log(chave)
console.log(valor)