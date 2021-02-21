import React from "react";
import Carregando from "./Carregando.js";
import Produto from "./Produto.js";
import Ordenar from "./Ordenar.js";

const ListaProdutos = ({carrinho, setCarrinho}) => {
  const [produto, setProduto] = React.useState([]);
  const [carregado, setCarregado] = React.useState(null);
  const [ordem, setOrdem] = React.useState([]);

  React.useEffect(() => {
    setCarregado(false)
    fetch("./products.json")
    .then((r) => r.json())
    .then((json) => {
      setProduto(json);
    });
    setCarregado(true);
  }, []);

  React.useEffect(() => {
      setProduto(ordem)
  }, [ordem])

  return (
    <div className="mainContent">
      <Ordenar setOrdem={setOrdem} produto={produto}/>
      {carregado === true ? (
        <div className="listaProdutos">
          <Produto produto={produto} setCarrinho={setCarrinho} carrinho={carrinho}/>
        </div>
      ) : (
        <Carregando />
      )}
    </div>
  );
};

export default ListaProdutos;
