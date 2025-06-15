const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
}

const chave = Object.keys(estudante)
const valor = Object.values(estudante)
const entradas = Object.entries(estudante)

//console.log(chave) -> entrada
//console.log(valor) -> valores
//console.log(entradas) -> chave e valor