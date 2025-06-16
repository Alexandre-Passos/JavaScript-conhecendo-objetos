const estudantes = require('./estudantes.json')

function filtrarPorPropriedade(nomeLista, propriedade) {
    return nomeLista.filter((estudante) => {
        //O HasOwnProperty serve para verificar se um objeto possui uma propriedade definida no 
        // próprio objeto, ao invés de uma propriedade herdada.
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const listaEnderecosImcompletos = filtrarPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosImcompletos)