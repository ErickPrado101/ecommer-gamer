import React from "react";
import { AppContext } from "../Context/AppContext";

const Carrinho = () => {
  const {
    carrinho,
    setPaginaCarrinho,
    produtoCarrinho,
    setCarrinho,
  } = React.useContext(AppContext);

  const [frete, setFrete] = React.useState(0);
  const [valorTotalProdutos, setValorTotalProdutos] = React.useState(0);

  function total() {
    const totalGeral = (total <= 250) ? (valorTotalProdutos + frete) : (valorTotalProdutos)
    return converterParaReal(totalGeral);
  }

  React.useEffect(() => {
    calculoFrete(carrinho);
  });

  function calculoFrete(qntItens) {
    (total <= 250) ? setFrete(qntItens * 10) : setFrete('Grátis')
  }

  React.useEffect(() => {
    puxarPrecosProdutosCarrinho(produtoCarrinho);
  });

  function puxarPrecosProdutosCarrinho(produtoCarrinho) {
    if (produtoCarrinho.length > 0) {
      const precosDosProdutos = produtoCarrinho.map((item) => item.price);
      const somaTotal = precosDosProdutos.reduce(
        (acc, valor) => (acc += valor)
      );
      setValorTotalProdutos(somaTotal);
    }
  }

  function converterParaReal(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

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

export default Carrinho;
