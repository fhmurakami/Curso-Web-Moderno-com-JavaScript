// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
//const {logradouro, numero, cep} = pessoa.endereco 
console.log(logradouro, numero, cep)

// Apenas o último dado pode estar 'nulo' ou 'undefined'
// Tentar acessar dados que não existem dentro de um objeto que também não existe irá causar um erro:
const {conta: {ag, num} } = pessoa
console.log(ag, num)
