interface TarjetaProps {
  nombre: string;
  precio: number;
  stock: number;
}

function TarjetaProducto({ nombre, precio, stock }: TarjetaProps) {

  return ( 
    <div className="product-box">
        <h3>{nombre}</h3>
        <span>Precio: {precio}</span>
        <span>Stock: {stock}</span>
    </div>
  )
}

export default TarjetaProducto