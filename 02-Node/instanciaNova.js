// Uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

// require('./instanciaNova') irá retornar uma função e esta deve ser chamada
// para retornar o objeto.