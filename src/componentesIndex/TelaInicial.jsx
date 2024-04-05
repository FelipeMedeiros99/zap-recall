import Logo from "./../assets/logo.png"


const TelaInicial = ({iniciarJogo}) =>{

        return(
            <div className="tela-inicial">
                <img className="logo-grande" src={Logo} alt="logo de raio" />
                <h1 className="titulo">ZapRecall</h1>
                <button className="botao-iniciar" onClick={iniciarJogo}>Iniciar Recall!</button>
            </div>
        )
    }

export default TelaInicial