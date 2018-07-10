// pessoa -> endereço de memória (0x123) -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 0x456 <- {...}
// pessoa = { nome: 'Ana' } // gera erro pois está tentando alterar o endereço de uma constante (pessoa)

// Congela o Objeto, ou seja, não é possível fazer nenhuma alteração:
Object.freeze(pessoa)

pessoa.nome = 'Maria' // Não gera erro
console.log(pessoa.nome)

// cria um objeto constante:
const pessoaConstante = Object.freeze({nome: 'José'})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante)