import React from "react";
import Carregando from "./Carregando.js";
import Produto from "./ListaProduto.js";
import Ordenar from "./Ordenar.js";
import { AppContext } from "../Context/AppContext.js";

const CorpoPagina = () => {

  const { produto, carregado} = React.useContext(AppContext)
  
  if(produto === null) return null
  return (
    <div className="mainContent">
      <Ordenar />
      {carregado ? (
        <div className="containerListaProdutos">
          <div className="listaProdutos">
            <Produto />
          </div>
        </div>
      ) : (
        <Carregando />
      )}
    </div>
  );
};

export default CorpoPagina;
