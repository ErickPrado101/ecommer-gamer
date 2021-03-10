import React from "react";
import styles from "./ListaProdutos.module.css"
import { AppContext } from "../Context/AppContext";

const Produto = () => {

  const { carrinho, setCarrinho, setProdutoCarrinho, produtoCarrinho, ordem, handleMensagemDeCompra} = React.useContext(AppContext)

  function addCarrinho(produtoComprado) {
    setCarrinho(carrinho+1);
    setProdutoCarrinho([...produtoCarrinho, produtoComprado]);
    handleMensagemDeCompra()
  }

  return ordem.map((item, index) => {
    return (
      <div className={styles.produto} key={index}>
        <div className={styles.produtoCounteudo}>
          <img src={`./assets/${item.image}`} alt={item.name} />
          <p className={styles.precoProduto}>
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>{item.name}</p>
        </div>
        <div className={styles.produtoScoreEBotao}>
          <p className={styles.scoreProduto}>Score: {item.score}</p>        
          <button className={styles.btnProduto + " btn"} onClick={() => addCarrinho(item)}>
            + Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  });
};

export default Produto;
