import React, { useState, useEffect } from "react";
import Carregando from "./Carregando.js";

const Api = () => {
  const [produto, setProduto] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    fetch("./products.json")
      .then((r) => r.json())
      .then((json) => {
        setProduto(json);
        setCarregado(true);
      });
  }, []);

  const listItem = produto.map((item) => (
    <div className="produto" key={item.id}>
      <img src={`./assets/${item.image}`} alt={item.name} />
      <p>Preço: {item.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
      })}</p>
      <p>Nome: {item.name}</p>
      <p>Score: {item.score}</p>
      <button className="btn btn-produto">
        Adicionar ao Carrinho
      </button>
    </div>
  ));

  return (
    <div>
        {(carregado === true) ? (<div className="listaProdutos">{listItem}</div>) : (<Carregando />)}      
    </div>
  );
};

export default Api;
