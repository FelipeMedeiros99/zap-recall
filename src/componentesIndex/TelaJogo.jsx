import data from "../data"
import { useState } from "react"

const TelaJogo = ()=>{
    const repeticoes = [0, 1, 2, 3]
    const randint = (min, max) =>{
        return(Math.floor(Math.random()*(max+1-min)+min))
    }

    const chave = Object.keys(data[0])[0]
    const [deck, setDeck] = useState([...data[0][chave]])


    console.log(deck)
    return(
        <div className="tela-jogo">
            {repeticoes.map((key)=>{
                return(
                    <div className="pergunta">
                        <p>Pergunta {key}</p>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                )
            })}         
        </div>
    )
}

export default TelaJogo