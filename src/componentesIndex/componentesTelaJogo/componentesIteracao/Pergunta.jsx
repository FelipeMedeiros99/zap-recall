const Pergunta = ({questao}) => {
    console.log(questao)
    return(
        <div className="pergunta">
            <p>Elemento da pergunta</p>
            <div className="botoes">
                <button className="botao-resposta nao-lembrei">Não lembrei</button>
                <button className="botao-resposta quase-nao-lembrei">Quase não lembrei</button>
                <button className="botao-resposta zap">Zap!</button>
            </div>
        </div>
    )
}

export default Pergunta