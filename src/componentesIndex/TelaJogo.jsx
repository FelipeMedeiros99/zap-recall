import TopoJogo from "./componentesTelaJogo/TopoJogo"
import Iteracao from "./componentesTelaJogo/Iteracao"
import Rodape from "./componentesTelaJogo/Rodape"
import { useState } from "react"

const TelaJogo = ({questoes})=>{        
    const [perguntasRespondidas, setPerguntasRespondidas] = useState(0)

    const contadorDeRespostas = ()=>{
        setPerguntasRespondidas(perguntasRespondidas+1)
    }



    return(
        <div className="tela-jogo">  
            <TopoJogo />
            <Iteracao contadorDeRespostas={contadorDeRespostas} questoes={questoes}/>
            <Rodape perguntasRespondidas={perguntasRespondidas}/>
        </div>
    )
}

export default TelaJogo