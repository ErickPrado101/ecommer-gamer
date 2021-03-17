import React from "react";
import styles from "./ModalCarrinho.module.css";
import { AppContext } from "../../Context/AppContext";
import { ModalCarrinhoContext } from "../../Context/ModalCarrinhoContext";

const ModalCarrinho = () => {
  const {
    carrinho,
    setPaginaCarrinho,
    produtoCarrinho,
    setCarrinho,
  } = React.useContext(AppContext);

  const {
    calculoFrete,
    puxarPrecosProdutosCarrinho,
    converterParaReal,
    subtotal,
    frete,
    somaValorProdutos,
  } = React.useContext(ModalCarrinhoContext);

  React.useEffect(() => {
    calculoFrete(carrinho);
  }, [calculoFrete, carrinho]);

  React.useEffect(() => {
    puxarPrecosProdutosCarrinho(produtoCarrinho);
  }, [puxarPrecosProdutosCarrinho, produtoCarrinho]);

  function removerProdutoCarrinho(index) {
    produtoCarrinho.splice(index, 1);
    setCarrinho(carrinho - 1);
  }

  function handleClickFora({ target, currentTarget }) {
    if (target === currentTarget) {
      setPaginaCarrinho(false);
    }
  }

  return (
    <div className={styles.modalContainer} onClick={handleClickFora}>
      <div className={styles.modal}>
        <button
          className={styles.modalBotaoFechar}
          onClick={() => setPaginaCarrinho(false)}
        >
          X
        </button>
        <h2>Seus Produtos</h2>
        <div className={styles.modalProdutosNoCarrinho}>
          {carrinho > 0 ? (
            produtoCarrinho.map((item, index) => {
              return (
                <div className={styles.produtoCarrinho} key={index}>
                  <div className={styles.produtoComprado}>
                    <img src={`./assets/${item.image}`} alt={item.name} />
                    <p className={styles.precoProduto}>
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p>{item.name}</p>
                  </div>
                  <button onClick={() => removerProdutoCarrinho(index)}>
                    <img
                      src="./assets/removefromcart.svg"
                      alt="Remover do carrinho"
                    ></img>
                  </button>
                </div>
              );
            })
          ) : (
            <div className={styles.modalCarrinhoVazio}>
              <p>Seu carrinho está vazio.</p>
              <button
                className={styles.btnVoltar + " btn"}
                onClick={() => setPaginaCarrinho(false)}
              >
                Voltar
              </button>
            </div>
          )}
        </div>
        {carrinho > 0 && (
          <div className={styles.modalValorPagar}>
            <p>
              <span>Frete: </span>
              {converterParaReal(frete)}
            </p>
            <p>
              <span>SubTotal:</span>{" "}
              {carrinho > 0 ? converterParaReal(somaValorProdutos) : "0"}
            </p>
            <p>
              <span>Total:</span> {converterParaReal(subtotal)}
            </p>
            <button className={styles.btnFinalizarCompra + " btn"}>
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCarrinho;
