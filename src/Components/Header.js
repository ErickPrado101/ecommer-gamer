import React from "react";
import { AppContext } from "../Context/AppContext";
import ModalCarrinho from "./ModalCarrinho";

const Header = () => {
  
  const { carrinho, paginaCarrinho, setPaginaCarrinho } = React.useContext(AppContext)

  if (paginaCarrinho) return (
    <ModalCarrinho />)
  return (    
    <header className="header">
      <nav className="nav">
        <img className="logoImg" src="../assets/gamepad.svg" alt="gamepad"/>
        <h1 className="logo">Games</h1>
        <div className="carrinhoMenu" onClick={() => setPaginaCarrinho(true)}>
          <p><img src="./assets/cart-icon.svg" alt="Carrinho" /><span className="carrinhoNumero">{carrinho}</span></p>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
