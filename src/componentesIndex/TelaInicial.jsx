import Logo from "./../assets/logo.png"
import {useState} from 'react'


const TelaInicial = () =>{
    const [telaAtiva, setTelaAtiva] = useState(true)

    if (telaAtiva){
        return(
            <div className="tela-inicial">
                <img className="logo-grande" src={Logo} alt="logo de raio" />
                <h1 className="titulo">ZapRecall</h1>
                <button className="botao-iniciar" onClick={()=>setTelaAtiva(false)}>Iniciar Recall!</button>
            </div>
        )
    }else{
        return(<></>)
    }
}

export default TelaInicial