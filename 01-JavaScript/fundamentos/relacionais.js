console.log('01)', '1' == 1) // Valores iguais
console.log('02)', '1' === 1) // Valores e tipos iguais
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // newDate(0) = 1/jan/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // 'false' pois compara a referencia na memória
console.log('10)', d1 == d2) // 'false' pois compara a referencia na memória
console.log('11)', d1.getTime() === d2.getTime()) // compara dois números

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// É aconselhado usar estritamente igual (===)


