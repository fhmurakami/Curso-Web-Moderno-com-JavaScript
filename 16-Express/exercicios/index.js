const express = require('express')
const app = express()

app.get('/ola', (req, res) => {
    // res.send('<h1>Estou bem!</h1><br><br><h2>Tipo: HTML</h2>')
    
    // res.json({
    //     name: 'iPad 32 Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.json([
    //     {id: 7, name: 'Ana', position: 1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position: 3}
    // ])

    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
})

app.listen(3000, () => {
    console.log('Backend executando...')
})