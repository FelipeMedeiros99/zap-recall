import data from "../data"
import { useState, useEffect } from "react"
import TopoJogo from "./componentesTelaJogo/TopoJogo"
import Iteracao from "./componentesTelaJogo/Iteracao"

const TelaJogo = ({questoes})=>{        
    return(
        <div className="tela-jogo">  
            <TopoJogo />
            <Iteracao questoes={questoes}/>
        </div>
    )
}

export default TelaJogo