let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros (true):')
console.log(!!3) // Número inteiro
console.log(!!-1) // Número inteiro
console.log(!!' ') // Espaço
console.log(!!'texto') // Texto
console.log(!![]) // Array vazio
console.log(!!{}) // Objeto
console.log(!!Infinity) // Infinito
console.log(!!(isAtivo = true)) // Pega o valor atribuído à váriavel

console.log('os falsos (false):')
console.log(!!0) // Zero
console.log(!!'') // String vazia
console.log(!!null) // Nulo
console.log(!!NaN) // Not a Number
console.log(!!undefined) // Indefinido
console.log(!!(isAtivo = false)) //Valor atribuído à variável

console.log('pra finalizar:')
console.log(!!('' || null || 0 || ' ')) // Irá imprimir 'true'

let nome = ''
console.log(nome || 'Desconhecido')