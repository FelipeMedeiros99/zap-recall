const TopicoPergunta = ({ indice, mostrarPergunta }) => {
    return (
        <div className="topico-pergunta" onClick={()=>mostrarPergunta(indice)}>
            <p>Pergunta {indice+1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )

}


export default TopicoPergunta