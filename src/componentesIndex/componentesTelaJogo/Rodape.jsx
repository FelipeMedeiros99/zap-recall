import triste from "./../../assets/sad.png"
import feliz from './../../assets/party.png'
import Resultado from "./componentesRodape/Resultado"

const Rodape = ({perguntasRespondidas, listaDeResposta, naoLembrou}) => {
    
    const vitoria = <p className="motivacao">Você não    esqueceu de <br /> nenhum flashcard!</p>
    const derrota = <p className="motivacao">Ainda faltam alguns... <br />
                       Mas não desanime!</p>
    return(

        <div className="rodape">
            
            {perguntasRespondidas===4 && !naoLembrou && <Resultado texto='Parabéns' imagem={feliz} motivacao={vitoria} />}
            {perguntasRespondidas===4 && naoLembrou && <Resultado texto='Putz...' imagem={triste} motivacao={derrota}/>}

            <p>{perguntasRespondidas}/4 CONCLUÍDOS</p>
            <div className="imagens-respostas">
                {listaDeResposta.map((resposta)=>(
                    <>
                        {(resposta==='nao-lembrou') && <ion-icon class={`${resposta} md hydrated`} name="close-outline"></ion-icon>}
                        {(resposta==='quase-nao-lembrou') && <ion-icon class={`${resposta} md hydrated`} name="help-outline"></ion-icon>}
                        {(resposta==='zapiou') && <ion-icon class={`${resposta} md hydrated`} name="checkmark-outline"></ion-icon>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Rodape
