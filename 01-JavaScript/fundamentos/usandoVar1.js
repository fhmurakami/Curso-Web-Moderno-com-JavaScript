// Uma variável declarada com 'var' é acessível fora do bloco onde foi declarada, 
// desde que não seja o bloco de uma função
{
    {
        {
            {
                 var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
}

teste()
// console.log(local) // Irá dar erro pois a variável 'local' não foi definida no escopo global

// var possui apenas dois escopos possíveis: global e dentro de uma função