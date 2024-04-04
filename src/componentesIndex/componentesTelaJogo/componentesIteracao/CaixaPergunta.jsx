import setinha from './../../../assets/setinha.png'

const CaixaPergunta = ({questao, mostrarResposta, indice}) => {
  
    return(
        <div className="pergunta" onClick={()=>mostrarResposta(indice)}>
            <p>{Object.keys(questao)[0]}</p>
            <img src={setinha} alt="setinha de virar" />
        </div>
    )
}


export default CaixaPergunta