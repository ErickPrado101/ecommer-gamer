import React from "react";
import Carrinho from "./Carrinho";

const Header = ({carrinho}) => {

  const[paginaCarrinho, setPaginaCarrinho] = React.useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo"><a href="/">Games</a></h1>
        <div className="carrinhoMenu" onClick={() => setPaginaCarrinho(true)}>
          <p>{carrinho}</p><img src="./assets/cart-icon.svg" alt="Carrinho" />
        </div>
      </nav>
      {paginaCarrinho && <Carrinho carrinho={carrinho} setPaginaCarrinho={setPaginaCarrinho}/>}
    </header>
  );
};

export default Header;
