import React from "react";
import Carregando from "./Carregando.js";

const ListaProdutos = ({carrinho, setCarrinho}) => {
  const [produto, setProduto] = React.useState([]);
  const [carregado, setCarregado] = React.useState(false);
  const [ordem, setOrdem] = React.useState([]);

  React.useEffect(() => {
    fetch("./products.json")
    .then((r) => r.json())
    .then((json) => {
      setProduto(json);
      setCarregado(true);
    });
  }, []);

  React.useEffect(() => {
    setProduto(ordem)
  }, [ordem])

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
    )
  }

  const listItem = produto.map((item) => (
    <div className="produto" key={item.id}>
      <img src={`./assets/${item.image}`} alt={item.name} />
      <p className="precoProduto">
        {item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p>{item.name}</p>
      <p className="scoreProduto">Score: {item.score}</p>
      <button className="btn btnProduto" onClick={() => setCarrinho(carrinho+1)}>+ Adicionar ao Carrinho</button>
    </div>
  ));

  return (
    <div className="mainContent">
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
      {carregado === true ? (
        <div className="listaProdutos">{listItem}</div>
      ) : (
        <Carregando />
      )}
    </div>
  );
};

export default ListaProdutos;
