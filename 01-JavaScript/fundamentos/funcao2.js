// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
//  var = (parametros) => {funcao..}
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

// retorno implícito
//  var = (parametros) => retorno
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a)
imprimir2('Texto')