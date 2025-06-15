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
    }]
}

estudante.endereco.push({
    rua: 'Manicoré',
    numero: 312,
    complemento: ''
}
)


const complementoVerdadeiro = estudante.endereco.filter((endereco) => endereco.complemento)
console.log(complementoVerdadeiro)

