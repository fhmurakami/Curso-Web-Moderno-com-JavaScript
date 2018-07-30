const anonimo = process.argv.indexOf('-a') !== -1
const os = require('os'); // Necessário para rodar em qualquer SO
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        // const nome = data.toString().replace('\n', '')
        
        // No Windows:
        // const nome = data.toString().replace('\r\n', '')

        // Modo Universal (independente do SO)
        const nome = data.toString().replace(`${os.EOL}`, '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}