const Rodape = ({perguntasRespondidas}) => {
    return(
        <div className="rodape">
            <p>{perguntasRespondidas}/4 CONCLUÍDOS</p>
            <div className="imagens-respostas"></div>
        </div>
    )
}

export default Rodape