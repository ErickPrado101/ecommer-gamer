import React from "react";
import { AppContext } from "../Context/AppContext";

const Carrinho = () => {
  const { carrinho, setPaginaCarrinho, produtoCarrinho } = React.useContext(
    AppContext
  );
  const [frete, setFrete] = React.useState(0);
  const [precoProduto, setPrecoProduto] = React.useState([]);
  const [valorTotalProdutos, setValorTotalProdutos] = React.useState(0);

  const total = 0;

  React.useEffect(() => {
    if (total < 250) {
      setFrete(carrinho * 10);
    } else {
      setFrete(0);
    }
  }, [carrinho]);

  React.useEffect(() => {
    puxarPrecosProdutosCarrinho(produtoCarrinho);
  }, [produtoCarrinho]);

  function puxarPrecosProdutosCarrinho(produtoCarrinho) {
    const precosDosProdutos = produtoCarrinho.map((item) => item.price);
    setPrecoProduto([precosDosProdutos]);
  }

  /*React.useEffect(() => {
      somarPrecosProdutosCarrinho(precoProduto);
  }, [precoProduto]);*/

  /*function somarPrecosProdutosCarrinho(precoProduto) {
    const precoSomado = precoProduto[0].reduce((acc, valorAtual) => (acc + valorAtual),0);
    setValorTotalProdutos(precoSomado);
  }*/

  return (
    <div className="modalContainer">
      <div className="modal">
        <button
          className="modalBotaoFechar"
          onClick={() => setPaginaCarrinho(false)}
        >
          X
        </button>
        <h1>Seus Produtos</h1>
        <div className="modalProdutosNoCarrinho">
          {carrinho > 0
            ? produtoCarrinho.map((item, index) => {
                return (
                  <div className="produto produtoCarrinho" key={index}>
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
                  </div>
                );
              })
            : "Seu carrinho está vazio"}
        </div>
        {carrinho > 0 ? (
          <div className="modalValorPagar">
            <p>
              <span>Frete: </span>
              {frete.toLocaleString("Pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>SubTotal: {valorTotalProdutos}</p>
            <p>Total: Soma dos produtos com frete</p>
            <button className="btn">Finalizar Compra</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Carrinho;
