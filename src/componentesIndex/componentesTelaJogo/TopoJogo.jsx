import ImagemPequena from './../../assets/logo-pequeno.png'

const TopoJogo = () => {
    return (
        <div className='topo-jogo'>
            <div className="container-imagem">
                <img className="imagem-perquena" src={ImagemPequena} alt="logo do zap" />
            </div>
            <h1 className="titulo">ZapRecall</h1>
        </div>
    )
}

export default TopoJogo