import { useState } from "react";

export const Login = () => {
  console.log("Se renderiza");

  const [nombre, setNombre] = useState("romina");

  const changeName = () => {
    setNombre("isabel");
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};
