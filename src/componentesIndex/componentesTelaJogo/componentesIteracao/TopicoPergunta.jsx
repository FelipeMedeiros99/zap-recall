const TopicoPergunta = ({ indice, mostrarPergunta, classNameTopicoPergunta, onclickAtivo }) => {
    return (
        <div className={classNameTopicoPergunta} onClick={()=>onclickAtivo? mostrarPergunta(indice, false): null}>
            <p>Pergunta {indice+1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )

}


export default TopicoPergunta