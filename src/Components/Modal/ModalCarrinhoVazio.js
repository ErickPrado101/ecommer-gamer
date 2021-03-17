import React from "react";
import styles from "./ModalCarrinhoVazio.module.css";

const ModalCarrinhoVazio = ({ setPaginaCarrinho }) => {
  return (
    <div className={styles.modalCarrinhoVazio}>
      <p>Seu carrinho está vazio.</p>
      <button className="btn" onClick={() => setPaginaCarrinho(false)}>
        Voltar
      </button>
    </div>
  );
};

export default ModalCarrinhoVazio;
