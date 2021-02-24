import React from "react";
import Carregando from "./Carregando.js";
import Produto from "./Produto.js";
import Ordenar from "./Ordenar.js";
import { AppContext } from "../Context/AppContext.js";

const ListaProdutos = () => {
  const { produto, carregado } = React.useContext(AppContext)
  
  if(produto === null) return null
  return (
    <div className="mainContent">
      <Ordenar />
      {carregado ? (
        <div className="listaProdutos">
          <Produto />
        </div>
      ) : (
        <Carregando />
      )}
    </div>
  );
};

export default ListaProdutos;
