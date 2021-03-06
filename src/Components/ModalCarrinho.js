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
    subtotal,
    frete,
    somaValorProdutos,
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
        <h2>Seus Produtos</h2>
        <div className="modalProdutosNoCarrinho">
          {carrinho > 0 ? (
            produtoCarrinho.map((item, index) => {
              return (
                <div className="produtoCarrinho" key={index}>
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
                    <img src="./assets/removefromcart.svg" alt="Remover do carrinho"></img>
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
              <span>SubTotal:</span>{" "}
              {carrinho > 0 ? converterParaReal(somaValorProdutos) : "0"}
            </p>
            <p>
              <span>Total:</span> {converterParaReal(subtotal)}
            </p>
            <button className="btn">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCarrinho;
