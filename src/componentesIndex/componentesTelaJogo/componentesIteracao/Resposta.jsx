const Resposta = ({questao, mostrarPergunta, contador, mostrarResposta, alteraClassName, desativarOnclick }) => {
    

    const fecharPergunta = (nomeClasse) =>{
        mostrarPergunta(contador, true)
        mostrarResposta(contador, true)
        alteraClassName(contador, `topico-pergunta ${nomeClasse}`)
        desativarOnclick(contador)
    }



    return(
        <div className="resposta">
            <p>{Object.values(questao)[0]}</p>
            <div className="botoes">
                <button className="botao-resposta nao-lembrei" onClick={()=>fecharPergunta('nao-lembrou')}>Não lembrei</button>
                <button className="botao-resposta quase-nao-lembrei" onClick={()=>fecharPergunta('quase-nao-lembrou')}>Quase não lembrei</button>
                <button className="botao-resposta zap" onClick={()=>fecharPergunta('zapiou')}>Zap!</button>
            </div>
        </div>
    )
}

export default Resposta