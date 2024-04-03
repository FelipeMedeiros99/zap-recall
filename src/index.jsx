import {createRoot} from 'react-dom/client'
import TelaInicial from './componentesIndex/TelaInicial'
import TelaJogo from './componentesIndex/TelaJogo'
import './estilos/reset.css'
import './estilos/index.css'

const App = ()=>{
    return(
    <>
        <TelaInicial />
        <TelaJogo />
    </>
    )
}


const root = document.querySelector('.root')
createRoot(root).render(<App />)