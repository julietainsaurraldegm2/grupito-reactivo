interface TarjetaProps {
  nombre: string;
  precio: number;
  stock: number;
}

function Tarjeta({ nombre, precio, stock }: TarjetaProps) {
  return (
    <div className="tarjeta">
      <h3 className="nameText">{nombre}</h3>
      <p className="priceText">Precio: {precio}</p>
      <p className="stockText">Stock: {stock}</p>
    </div>
  )
}

export default Tarjeta;
