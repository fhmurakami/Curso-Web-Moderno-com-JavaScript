let numero = 1
{
    // 'let' diferencia os escopos em blocos
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)