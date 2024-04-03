import data from "../data"
import { useState } from "react"
import TopoJogo from "./TopoJogo"
import Iteracao from "./Iteracao"

const TelaJogo = ()=>{
    const randint = (min, max) =>{
        return(Math.floor(Math.random()*(max+1-min)+min))
    }

    const chave = Object.keys(data[0])[0]
    const [deck, setDeck] = useState([...data[0][chave]])


    console.log(deck)
    return(
        <div className="tela-jogo">            
            <TopoJogo />
            <Iteracao />
       
        </div>
    )
}

export default TelaJogo