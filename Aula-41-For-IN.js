const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereco: [{
        rua: 'Avenida Amazonas',
        numero: 115,
        complemento: 'Lanchonete do Elzir'
    }],
    aniversario: ((idade) => idade + 1),
    ano: 2025
}


for (let i in estudante) {
    const tipo = typeof estudante[i]
    if (tipo !== 'object' && tipo !== 'function') {
        console.log('Na posição', i, 'temos', estudante[i])
    }
}