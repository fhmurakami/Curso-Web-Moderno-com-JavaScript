const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Retorna vazio
console.log(escola.charCodeAt(3)) // Retorna o valor ASCII/Unicode
console.log(escola.indexOf('3')) // Retorna o índice do caractere

console.log(escola.substring(1)) // Imprime a partir do índice 1
console.log(escola.substring(0, 3)) // Imprime 3 caracteres a partir do índice 0

console.log('Escola '.concat(escola).concat("!")) // Concatena Strings
console.log('Escola ' + escola + "!") // Concatena Strings
console.log(escola.replace(3, 'e')) // Substitui o número 3 pela letra 'e'
console.log(escola.replace(/\d/, 'e')) // Substitui todos os dígitos pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // Gera um Array, usando ',' como separador