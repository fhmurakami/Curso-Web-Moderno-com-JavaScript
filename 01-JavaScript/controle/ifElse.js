const imprimirResulado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResulado(6)
imprimirResulado(8)
imprimirResulado('Cuidado!')