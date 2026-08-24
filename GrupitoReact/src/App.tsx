import Saludo from './class3/Juli/Saludo'
import './App.css'
import Tarjeta from './class3/Juli/TarjetaProducto'

function App() {
  return (
<>
<Saludo nombre= "Jose" />
<Tarjeta nombre = "macucas" precio = {1000} stock = {12000}/>
<Tarjeta nombre = "talitas" precio = {900} stock = {500}/>

</>
     )
}

export default App
