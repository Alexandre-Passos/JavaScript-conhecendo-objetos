const estudantes = require('./estudantes.json')

function buscarInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave] === valor)
}

const estudanteEncontrado = buscarInformacao(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)