const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} // Forma antiga
const obj2 = { a, b, c} // Forma nova (ES6)
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {} // Forma antiga
obj3[nomeAttr] = valorAttr
console.log(obj3)


const obj4 = {[nomeAttr]: valorAttr} // Forma nova (ES6)
console.log(obj4)

const obj5 = {
    // Forma antiga
    funcao1: function() {
        // ...
    },
    // Forma nova (ES6)
    funcao2() {
        // ...
    }
}

console.log(obj5)