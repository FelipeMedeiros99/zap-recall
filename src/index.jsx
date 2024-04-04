import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import TelaInicial from './componentesIndex/TelaInicial'
import TelaJogo from './componentesIndex/TelaJogo'
import './estilos/reset.css'
import './estilos/index.css'
import data from './data'

const App = ()=>{
    const [telaInicialAtiva, setTelaInicialAtiva] = useState(true)
    const chave = Object.keys(data[0])[0]
    const [deck, setDeck] = useState(data[0][chave])

    const [questoesSelecionadas, setQuestoesSelecionadas] = useState([])

    const iniciarJogo = () =>{  
        let todasAsQuestoes = [...deck]
        let questoesSorteadas = []

        for(let i = 0; i<4; i++){
            let indice = Math.floor(Math.random()*todasAsQuestoes.length)
            let questao = todasAsQuestoes[indice]
            questoesSorteadas.push(questao)
            todasAsQuestoes.splice(indice, 1)
       }
       setQuestoesSelecionadas([...questoesSorteadas])
       setTelaInicialAtiva(false)
    }


    return(
    <>
        {telaInicialAtiva && <TelaInicial iniciarJogo={iniciarJogo}/>}
        {!telaInicialAtiva && <TelaJogo iniciarJogo={iniciarJogo} questoes={questoesSelecionadas}/>}
    </>
    )
}


const root = document.querySelector('.root')
createRoot(root).render(<App />)