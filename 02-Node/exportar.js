console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // Não altera o valor exportado
console.log(module.exports)

// Não altera o valor exportado
exports = {
    nome: 'Teste'
}

console.log(module.exports)

// Para alterar o valor exportado:
module.exports = { publico: true }