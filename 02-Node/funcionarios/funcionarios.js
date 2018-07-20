const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio: Encontrar a mulher chinesa com menor salário

const generoFeminino = f => f.genero === 'F'
const paisChina = f => f.pais === 'China'
const menorSalario = (menor, atual) => menor.salario < atual.salario ? menor : atual

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    const resultado = funcionarios.filter(generoFeminino).filter(paisChina).reduce(menorSalario)
    console.log(resultado)

})
