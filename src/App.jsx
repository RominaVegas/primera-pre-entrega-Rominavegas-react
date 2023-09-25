import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";

function App() {
  let saludo = "Hola Romina como estas?";

  return (
    <div>
      <Navbar />
      <Login />

      <ItemListContainer saludo={saludo} edad={0} />
    </div>
  );
}

export default App;
