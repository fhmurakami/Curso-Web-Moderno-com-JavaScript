const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// retornar o arquivo como objeto:
const config = require('./arquivo.json') // sincrono
console.log(config.db)

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Constúdo da pasta: ')
    console.log(arquivos)
})