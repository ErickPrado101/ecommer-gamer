import React, { useState, useEffect } from "react";
import Produtos from "./Produtos.js";

const ListaProdutos = () => {

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
  
  console.log(produto)



  function orgPreco(event) {
    event.preventDefault();
    console.log(event.currentTarget)
  }

  function orgScore(event) {
    event.preventDefault();
  }

  function orgAZ(event) {
    event.preventDefault();
  }
  return (
    <div className="mainContent">
      <div className="headerLista">
        <h1>Lista de Produtos</h1>
        <p>Ordenar por: </p>
        <button className="btn btn-org" onClick={orgPreco}>
          Preço
        </button>
        <button className="btn btn-org" onClick={orgScore}>
          Popularidade(Score)
        </button>
        <button className="btn btn-org" onClick={orgAZ}>
          Ordem Alfabética
        </button>
      </div>
      <Produtos />
    </div>
  );
};

export default ListaProdutos;
