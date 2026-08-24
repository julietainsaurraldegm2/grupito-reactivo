function Perfil(){

    const nombre = "Jeremias";
    const biography = "Jeremais Sosa intentando usar el wifi :c";
    const edad = 18;

    return (
        <div className="content">
            <h1>{nombre}</h1>
            <img className="imagen" src="./public/conguito.jpeg"/>
            <p>{biography}</p>
            <span>{edad} años</span>
        </div>
    )

}

export default Perfil;