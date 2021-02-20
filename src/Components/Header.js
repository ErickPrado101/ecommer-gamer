import React from "react";

const Header = ({carrinho}) => {

  

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo"><a href="/">Games</a></h1>
        <div className="carrinhoMenu">
          <p>{carrinho}</p><img src="./assets/cart-icon.svg" alt="Carrinho" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
