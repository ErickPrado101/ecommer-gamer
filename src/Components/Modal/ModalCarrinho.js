import React from "react";
import styles from "./ModalCarrinho.module.css";
import { AppContext } from "../../Context/AppContext";
import { ModalCarrinhoContext } from "../../Context/ModalCarrinhoContext";
import ModalValorPagar from "./ModalValorPagar";
import ModalCarrinhoVazio from "./ModalCarrinhoVazio";
import ModalProduto from "./ModalProduto";

const ModalCarrinho = () => {
  const {
    carrinho,
    setPaginaCarrinho,
    produtoCarrinho,
    setCarrinho,
  } = React.useContext(AppContext);

  const { calculoFrete, puxarPrecosProdutosCarrinho } = React.useContext(
    ModalCarrinhoContext
  );

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
                <ModalProduto
                  item={item}
                  index={index}
                  key={index}
                  removerProdutoCarrinho={removerProdutoCarrinho}
                />
              );
            })
          ) : (
            <ModalCarrinhoVazio setPaginaCarrinho={setPaginaCarrinho} />
          )}
        </div>
        {carrinho > 0 && <ModalValorPagar carrinho={carrinho} />}
      </div>
    </div>
  );
};

export default ModalCarrinho;
