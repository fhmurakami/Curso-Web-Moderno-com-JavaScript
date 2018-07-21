require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Nome alterado' // Para evitar a troca do nome, pode ser utilizado Object.freeze()
console.log(MinhaApp.nome)