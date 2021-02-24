import React from "react";
import { AppContext } from "../Context/AppContext";

const Ordenar = () => {
  const { setOrdem, produto } = React.useContext(AppContext)

  function orgPreco() {
    setOrdem(
      produto.sort((a, b) =>
        a.price < b.price ? -1 : a.price === b.price ? 0 : 1
      )
    );
  }

  function orgScore() {
    setOrdem(
      produto.sort((a, b) =>
        a.score < b.score ? -1 : a.score === b.score ? 0 : 1
      )
    );
  }

  function orgAZ() {
    setOrdem(
      produto.sort((a, b) => (a.name < b.name ? -1 : a.name === b.name ? 0 : 1))
    );
  }

  return (
    <div className="headerLista">
      <h2>Lista de Produtos</h2>
      <p>Ordenar por: </p>
      <button className="btn btnOrg" onClick={orgPreco}>
        Preço
      </button>
      <button className="btn btnOrg" onClick={orgScore}>
        Popularidade (Score)
      </button>
      <button className="btn btnOrg" onClick={orgAZ}>
        Ordem Alfabética
      </button>
    </div>
  );
};

export default Ordenar;
