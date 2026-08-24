import Tarjeta from "./tarjetaProps.tsx";

function Content() {
return (
    <div className="contentTajeta">
      <Tarjeta nombre="Topline" precio="1000" stock="13" />
      <Tarjeta nombre="CocaCola 2L" precio="7000" stock="70" />
      <Tarjeta nombre="DonSatur" precio="1300" stock="67" />
    </div>
  );
}

export default Content;