import React from "react";
import { AppContext } from "../Context/AppContext";

const Ordenar = () => {
  const { ordem, setNovaOrdem } = React.useContext(AppContext)

  function orgPreco() {
    setNovaOrdem(
      ordem.sort((a, b) => a.price - b.price));
  }

  function orgScore() {
    setNovaOrdem(
      ordem.sort((a, b) => a.score - b.score));
  }

  function orgAZ() {
    setNovaOrdem(
      ordem.sort((a, b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1));
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
