import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Saludo from "./Saludo.tsx"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Contenedor() {
    
    return(
        <div>
            <Saludo/>
        </div>
    )
}

export default Contenedor;