function Perfil(){

    const nombre = "Giovanni";
    const bio = "Giovanni la volpe haciendo la clase 2 del modulo de React";
    const edad = 18;

    return (
        <div className="content">
            <h1>{nombre}</h1>
            <img className="imagen" src="./public/conguito.jpeg"/>
            <p>{bio}</p>
            <span>{edad} años</span>
        </div>
    )

}

export default Perfil;