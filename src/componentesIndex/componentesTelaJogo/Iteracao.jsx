import { useState } from 'react'
import TopicoPergunta from './componentesIteracao/TopicoPergunta'
import CaixaPergunta from './componentesIteracao/CaixaPergunta'
import Pergunta from './componentesIteracao/Pergunta'


const Iteracao = ({questoes}) => {
    
    const [caixaPerguntaOculta, setCaixaPerguntaOculta] = useState([true, true, true, true])
    const mostrarPergunta = (posicao) => {
        const elementos = [...caixaPerguntaOculta]
        elementos[posicao] = false
        setCaixaPerguntaOculta(elementos)    
        console.log('caixa de perguntas ocultas: ' + caixaPerguntaOculta)
    }

    const [respostaOculta, setRespostaOculta] = useState([true, true, true, true])
    const mostrarResposta = (posicao)=>{
        let visibilidadeRespostas = [...respostaOculta]
        visibilidadeRespostas[posicao] = false
        setRespostaOculta([...visibilidadeRespostas])
        console.log(respostaOculta)
    }


    return (
        <>
            {questoes.map((questao, contador) => {

                return (
                    <>
                        {caixaPerguntaOculta[contador] && <TopicoPergunta mostrarPergunta={mostrarPergunta} indice={contador} />}

                        {!caixaPerguntaOculta[contador] && respostaOculta[contador] && <CaixaPergunta questao={questao} indice={contador} mostrarResposta={mostrarResposta}/>}
                        
                        {!respostaOculta[contador] && <Pergunta questao={questao}/>}
            
                    </>
                )

            })}
        </>
    )
}

export default Iteracao