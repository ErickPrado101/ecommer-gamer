import React from "react";

const Produto = ({ produto, setCarrinho, carrinho }) => {
  function addCarrinho() {
    setCarrinho(carrinho + 1);
  }

  return produto.map((item) => {
    return (
      <div className="produto" key={item.id}>
        <img src={`./assets/${item.image}`} alt={item.name} />
        <p className="precoProduto">
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>{item.name}</p>
        <p className="scoreProduto">Score: {item.score}</p>
        <button className="btn btnProduto" onClick={addCarrinho}>
          + Adicionar ao Carrinho
        </button>
      </div>
    );
  });
};

export default Produto;
