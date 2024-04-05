import TopoJogo from "./componentesTelaJogo/TopoJogo"
import Iteracao from "./componentesTelaJogo/Iteracao"
import Rodape from "./componentesTelaJogo/Rodape"


const TelaJogo = ({questoes})=>{        
    return(
        <div className="tela-jogo">  
            <TopoJogo />
            <Iteracao questoes={questoes}/>
            <Rodape />
        </div>
    )
}

export default TelaJogo