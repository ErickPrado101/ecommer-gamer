import React from "react";
import { AppContext } from "../Context/AppContext";

const Produto = () => {

  const { carrinho, setCarrinho, produto } = React.useContext(AppContext)

  function addCarrinho() {
    setCarrinho(carrinho+1);
  }

  return produto.map((item, index) => {
    return (
      <div className="produto" key={index}>
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
