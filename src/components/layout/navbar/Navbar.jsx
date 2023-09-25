// import {BiUserCircle} from "react-icons/bi"

import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h4>Logo</h4>
      <ul>
        <li>Todos los Modelos</li>
        <li>Vestidos Cortos</li>
        <li>Vestidos Largos</li>
      </ul>
      <CartWidget />
    </div>
  );
};
