function criarProduto(nome, preco) {
    return {
        nome, // nome: nome
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('TV', 2500))
console.log(criarProduto('Notebook', 2199.99))