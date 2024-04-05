const Rodape = ({perguntasRespondidas, listaDeResposta}) => {
    console.log(listaDeResposta)
    return(
        <div className="rodape">
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
