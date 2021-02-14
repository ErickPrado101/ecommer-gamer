import React from "react";

const Header = () => {

const carrinho = 0;

  return (
    <header className="header">
      <a href="/">Logo</a>
      <div className="carrinho_menu">
        {carrinho}<img src="assets/cart-icon.svg" alt="Carrinho" />
      </div>
    </header>
  );
};

export default Header;
