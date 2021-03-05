import React from "react";
import { AppContext } from "../Context/AppContext";
import { ModalCarrinhoContext } from "../Context/ModalCarrinhoContext";

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
    total,
    frete,
    valorTotalProdutos,
  } = React.useContext(ModalCarrinhoContext);

  React.useEffect(() => {
    calculoFrete(carrinho);
  });

  React.useEffect(() => {
    puxarPrecosProdutosCarrinho(produtoCarrinho);
  });

  function removerProdutoCarrinho(index) {
    produtoCarrinho.splice(index, 1);
    setCarrinho(carrinho - 1);
  }

  return (
    <div className="modalContainer">
      <div className="modal">
        <button
          className="modalBotaoFechar"
          onClick={() => setPaginaCarrinho(false)}
        >
          X
        </button>
        <h1>Seus Produtos</h1>
        <div className="modalProdutosNoCarrinho">
          {carrinho > 0 ? (
            produtoCarrinho.map((item, index) => {
              return (
                <div className="produto produtoCarrinho" key={index}>
                  <div className="produtoCounteudo">
                    <img src={`./assets/${item.image}`} alt={item.name} />
                    <p className="precoProduto">
                      {item.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p>{item.name}</p>
                  </div>
                  <button onClick={() => removerProdutoCarrinho(index)}>
                    🗑
                  </button>
                </div>
              );
            })
          ) : (
            <div className="modalCarrinhoVazio">
              <p>Seu carrinho está vazio.</p>
              <button className="btn" onClick={() => setPaginaCarrinho(false)}>
                Voltar
              </button>
            </div>
          )}
        </div>
        {carrinho > 0 && (
          <div className="modalValorPagar">
            <p>
              <span>Frete: </span>
              {converterParaReal(frete)}
            </p>
            <p>
              SubTotal:{" "}
              {carrinho > 0 ? converterParaReal(valorTotalProdutos) : "0"}
            </p>
            <p>Total: {total()}</p>
            <button className="btn">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCarrinho;
