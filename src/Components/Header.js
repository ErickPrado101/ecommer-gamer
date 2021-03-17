import React from "react";
import styles from "./Header.module.css";
import { AppContext } from "../Context/AppContext";
import ModalCarrinho from "./Modal/ModalCarrinho";

const Header = () => {
  const { carrinho, paginaCarrinho, setPaginaCarrinho } = React.useContext(
    AppContext
  );

  return (
    <header className={styles.header}>
      {paginaCarrinho && <ModalCarrinho />}
      <nav className={styles.nav}>
        <img
          className={styles.logoImg}
          src="./assets/gamepad.svg"
          alt="gamepad"
        />
        <h1 className={styles.logo}>Games</h1>
        <div
          className={styles.carrinhoMenu}
          onClick={() => setPaginaCarrinho(true)}
        >
          <p>
            <img src="./assets/cart-icon.svg" alt="Carrinho" />
            <span className={styles.carrinhoNumero}>{carrinho}</span>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
