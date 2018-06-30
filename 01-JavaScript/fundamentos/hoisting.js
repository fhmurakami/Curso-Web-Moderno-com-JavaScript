// var a
console.log('a= ', a)
var a = 2
// a = 2
console.log('a =', a)

function teste() {
    console.log('b =', b)
    var b = 3
    console.log('b =', b)
}

teste()
// console.log('b =', b)

console.log('c =', c) // Gera um erro, pois o 'hoisting' não ocorre em uma declaração com let
let c = 5
console.log('c =', c)