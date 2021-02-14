import React, { useState, useEffect } from "react";
import Produtos from "./Produtos.js";

const ListaProdutos = () => {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((r) => r.json())
      .then((json) => {
        setProduto(json);
      });
  }, []);

  function orgPreco(event) {
    event.preventDefault();
    setProduto(
      produto.sort((a, b) =>
        a.price < b.price ? -1 : a.price === b.price ? 0 : 1
      )
    );
    console.log(produto);
  }

  function orgScore(event) {
    event.preventDefault();
    setProduto(
      produto.sort((a, b) =>
        a.score < b.score ? -1 : a.score === b.score ? 0 : 1
      )
    );
    console.log(produto);
  }

  function orgAZ(event) {
    event.preventDefault();
    setProduto(
      produto.sort((a, b) => (a.name < b.name ? -1 : a.name === b.name ? 0 : 1))
    );
    console.log(produto);
  }

  return (
    <div className="mainContent">
      <div className="headerLista">
        <h2>Lista de Produtos</h2>
        <p>Ordenar por: </p>
        <button className="btn btnOrg" onClick={orgPreco}>
          Preço
        </button>
        <button className="btn btnOrg" onClick={orgScore}>
          Popularidade(Score)
        </button>
        <button className="btn btnOrg" onClick={orgAZ}>
          Ordem Alfabética
        </button>
      </div>
      <Produtos />
    </div>
  );
};

export default ListaProdutos;
