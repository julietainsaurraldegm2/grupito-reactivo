import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Saludo from "./Saludo.tsx"
import TarjetaProducto from './TarjetaProducto.tsx'
import "./TarjetaProducto.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div>
            <div>
                <Saludo nombre= {" Gio"}/>
                <Saludo nombre= {" Juli"}/>
                <Saludo nombre= {" Jere"}/>
            </div>
            <section className='products'>
                <div>
                    <TarjetaProducto nombre="CocaCola" precio={777} stock={1}/>
                </div>
                <div>
                    <TarjetaProducto nombre="Pepis" precio={888} stock={2}/>
                </div>
                <div>
                    <TarjetaProducto nombre="Pritty" precio={120} stock={0}/>
                </div>
            </section>
        </div>
    )
}

export default Content;