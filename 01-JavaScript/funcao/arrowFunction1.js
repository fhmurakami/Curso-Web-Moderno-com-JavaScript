let dobro = function (a) {
    return 2 * a
}

// Reescrevendo como uma função arrow
dobro = (a) => {
    return 2 * a
}

// Se houver apenas um parâmetro os parenteses podem ser omitidos
// Retirando as chaves {}, tem=se um retorno implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro '_'
console.log(ola())