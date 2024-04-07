
const Resultado = ({ imagem, texto, motivacao }) => {
    return (
        <div className="resultado">
            <div className='secao-imagem'>
                <img src={imagem} alt={texto} />
                <br />
                <p>{texto}</p>
            </div>
            {motivacao}
        </div>
    )
}

export default Resultado