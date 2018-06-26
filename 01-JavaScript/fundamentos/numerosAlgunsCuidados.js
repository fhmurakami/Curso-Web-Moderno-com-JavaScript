console.log(7 / 0) // Retorna Infinity
console.log("10" / 2) // Divisão de String por numero
console.log('3' + 2) // Concatena os números. Resultado será 32 ao invés de 5. '3' - 2 irá retornar 1
console.log('3' - 2) // Faz a subtração e retorna 1
console.log("Texto" * 2) // Retorna NaN
console.log(0.1 + 0.7) // Não retorna 0.8, a especificação para maior precisão é mais lenta.
// console.log(10.toString()) // Esta linha gera um erro de sintaxe. Deve ser utilizado da forma abaixo:
console.log((10).toString())