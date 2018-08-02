// não indexada / não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Grêmio')
times.add('Chapecoense')
times.add('Palmeiras')

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // letra inicial minúscula
console.log(times.has('Vasco'))
times.delete('São Paulo')
console.log(times.has('São Paulo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
