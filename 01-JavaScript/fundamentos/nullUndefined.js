let valor // não inicializada
console.log(valor) // Indefinido

valor = null // Não possui nenhum valor e não aponta para nenhum endereço de memória
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // Indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir 'undefined'
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)