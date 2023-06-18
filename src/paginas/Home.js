import React, { useState, useEffect } from "react";
import TarjetaMesa from "../components/TarjetaMesa";
import TarjetaAgregarMesa from "../components/TarjetaAgregarMesa";

const mesaInicial = {
  numero: "1",
  estado: "Pendiente",
  ordenes: "5",
};
const mesaAgregada = {
  numero: "2",
  estado: "Vacante",
  ordenes: "0",
};

export default function Home() {
  const [mesas, setMesas] = useState([mesaInicial]);

  const agregarMesa = (nuevaMesa) => {
    let nuevoArrayMesas = [...mesas, nuevaMesa];
    console.log("agregando mesa");
    setMesas(nuevoArrayMesas);
  };
  return (
    <div>
      Home
      {mesas.map((mesa) => {
        return <TarjetaMesa {...mesa} />;
      })}
      <TarjetaAgregarMesa agregarMesa={() => agregarMesa(mesaAgregada)} />
    </div>
  );
}
