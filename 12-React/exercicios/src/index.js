import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'

// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
        </Pai>
    </div>
, document.getElementById('root'))