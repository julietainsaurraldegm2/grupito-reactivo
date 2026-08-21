function Perfil() {

    const nombre = "Jeremias";
    const biografia = "Nacido en la paternal";

    return(
        <div className="contenedor">
            <h1>{nombre}</h1>
            <img src="./public/images.jpeg" />
            <p>{biografia}</p>
        </div>
    )
}

export default Perfil;