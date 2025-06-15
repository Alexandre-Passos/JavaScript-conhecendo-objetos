const estudantes = {
    nome: 'Alexandre',
    idade: 20,
    profissao: 'Estudante'
}

estudantes.salario = 600
console.log(estudantes.salario)
console.log(estudantes)

estudantes.bolsista = true

delete estudantes.bolsista
console.log(estudantes)