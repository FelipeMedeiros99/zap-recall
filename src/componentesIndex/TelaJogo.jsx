import TopoJogo from "./componentesTelaJogo/TopoJogo"
import Iteracao from "./componentesTelaJogo/Iteracao"
import Rodape from "./componentesTelaJogo/Rodape"
import { useState } from "react"

const TelaJogo = ({questoes})=>{

    const [perguntasRespondidas, setPerguntasRespondidas] = useState(0)
    const contadorDeRespostas = ()=>{
        setPerguntasRespondidas(perguntasRespondidas+1)
    }

    const [listaDeResposta, setListaDeResposta] = useState([])

    const [naoLembrou, setNaoLembrou] = useState(false)
    const verificarSeNaoLembrou = ()=>{
        if(listaDeResposta.indexOf('nao-lembrou') !== -1){
            setNaoLembrou(true)
        } 
    }


    const adicionaResposta = (resposta) => {
        let respostas = [...listaDeResposta, resposta]
        setListaDeResposta(respostas)
        verificarSeNaoLembrou()
    }



    return(
        <div className="tela-jogo">  
            <TopoJogo />
            <Iteracao contadorDeRespostas={contadorDeRespostas} questoes={questoes} adicionaResposta={adicionaResposta}/>
            <Rodape naoLembrou={naoLembrou} listaDeResposta={listaDeResposta} perguntasRespondidas={perguntasRespondidas}/>
        </div>
    )
}

export default TelaJogo