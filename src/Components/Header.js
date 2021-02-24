import React from "react";
import { AppContext } from "../Context/AppContext";
import Carrinho from "./Carrinho";

const Header = () => {
  
  const { carrinho, paginaCarrinho, setPaginaCarrinho } = React.useContext(AppContext)

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">
          <a href="/">Games</a>
        </h1>
        <div className="carrinhoMenu" onClick={() => setPaginaCarrinho(true)}>
          <p>{carrinho}</p>
          <img src="./assets/cart-icon.svg" alt="Carrinho" />
        </div>
      </nav>
      {paginaCarrinho && (
        <Carrinho />
      )}
    </header>
  );
};

export default Header;
