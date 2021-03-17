import React from "react";
import styles from "./ModalProduto.module.css";

const ModalProduto = ({ item, index, removerProdutoCarrinho }) => {
  return (
    <div className={styles.produtoCarrinho} key={index}>
      <div className={styles.produtoComprado}>
        <img src={`./assets/${item.image}`} alt={item.name} />
        <p>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>{item.name}</p>
      </div>
      <button onClick={() => removerProdutoCarrinho(index)}>
        <img src="./assets/removefromcart.svg" alt="Remover do carrinho"></img>
      </button>
    </div>
  );
};

export default ModalProduto;
