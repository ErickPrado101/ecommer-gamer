import React from "react";
import { AppContext } from "../Context/AppContext";

const Produto = () => {

  const { carrinho, setCarrinho, produto, setProdutoCarrinho, produtoCarrinho} = React.useContext(AppContext)

  function addCarrinho(produtoComprado) {
    setCarrinho(carrinho+1);
    setProdutoCarrinho([...produtoCarrinho, produtoComprado]);
  }

  return produto.map((item, index) => {
    return (
      <div className="produto" key={index}>
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
        <p className="scoreProduto">Score: {item.score}</p>        
        <button className="btn btnProduto" onClick={() => addCarrinho(item)}>
          + Adicionar ao Carrinho
        </button>
      </div>
    );
  });
};

export default Produto;
