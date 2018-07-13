console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('José')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Altera o próprio array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
// (indice, num_de_elementos, novo_elemento)
// (1,1, 'Elemento1') exclui 1 elemento a partir do indice 1 e adiciona os novos elementos
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') 
console.log(aprovados)