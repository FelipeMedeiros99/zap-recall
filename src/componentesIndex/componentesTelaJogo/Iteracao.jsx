import { useState } from 'react'
import TopicoPergunta from './componentesIteracao/TopicoPergunta'
import CaixaPergunta from './componentesIteracao/CaixaPergunta'
import Resposta from './componentesIteracao/Resposta'


const Iteracao = ({questoes, contadorDeRespostas}) => {
    
    const [caixaPerguntaOculta, setCaixaPerguntaOculta] = useState([true, true, true, true])
    const mostrarPergunta = (posicao, visivel) => {
        const elementos = [...caixaPerguntaOculta]
        elementos[posicao] = visivel
        setCaixaPerguntaOculta(elementos)    
        console.log('caixa de perguntas ocultas: ' + caixaPerguntaOculta)
    }

    const [respostaOculta, setRespostaOculta] = useState([true, true, true, true])
    const mostrarResposta = (posicao, visibilidade)=>{
        let visibilidadeRespostas = [...respostaOculta]
        visibilidadeRespostas[posicao] = visibilidade
        setRespostaOculta([...visibilidadeRespostas])
        console.log(respostaOculta)
    }

    const [onclickAtivo, setOnclickAtivo] = useState([true, true, true, true])
    const desativarOnclick = (pos)=>{
        let elemento = [...onclickAtivo]
        elemento[pos] = false
        setOnclickAtivo(elemento)
        contadorDeRespostas()
    }

    const [classNameTopicoPergunta, SetClassNameTopicoPergunta] = useState(['topico-pergunta', 'topico-pergunta','topico-pergunta','topico-pergunta'])
    const alteraClassName=(posicao, novaClasse) =>{
        let elemento = [...classNameTopicoPergunta]
        elemento[posicao] = novaClasse
        SetClassNameTopicoPergunta(elemento)
    }




    return (
        <>
            {questoes.map((questao, contador) => {

                return (
                    <>
                        {caixaPerguntaOculta[contador] && <TopicoPergunta onclickAtivo={onclickAtivo[contador]} classNameTopicoPergunta={classNameTopicoPergunta[contador]} mostrarPergunta={mostrarPergunta} indice={contador} />}

                        {!caixaPerguntaOculta[contador] && respostaOculta[contador] && <CaixaPergunta questao={questao} indice={contador} mostrarResposta={mostrarResposta}/>}
                        
                        {!respostaOculta[contador] && <Resposta contador={contador} mostrarResposta={mostrarResposta} mostrarPergunta={mostrarPergunta} questao={questao} alteraClassName={alteraClassName} desativarOnclick={desativarOnclick}/>}
            
                    </>
                )

            })}
        </>
    )
}

export default Iteracao