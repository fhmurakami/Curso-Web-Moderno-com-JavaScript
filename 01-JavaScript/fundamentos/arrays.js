const valores = [7.7, 8.9, 6.3, 9.2] // Array com 4 posições
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // Acrescenta no final do array
console.log(valores)

console.log(valores.pop()) // Retira o último item do array
delete valores[0] // Apaga o valor do item
console.log(valores)

console.log(typeof valores)