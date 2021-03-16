import React from "react";

export const ModalCarrinhoContext = React.createContext();

export function ModalContext({ children }) {
  const [frete, setFrete] = React.useState(0);
  const [somaValorProdutos, setsomaValorProdutos] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);

  const itensParaFreteGratis = 4;

  function calculoFrete(qntItens) {
    if (qntItens < itensParaFreteGratis) {
      setFrete(qntItens * 10);
    } else {
      setFrete("Grátis");
    }
    total();
  }

  function total() {
    if (!frete === "Grátis") {
      setSubtotal(somaValorProdutos + frete);
    } else {
      setSubtotal(somaValorProdutos);
    }
  }

  function puxarPrecosProdutosCarrinho(produtoCarrinho) {
    if (produtoCarrinho.length > 0) {
      const precosDosProdutos = produtoCarrinho.map((item) => item.price);
      const somaTotal = precosDosProdutos.reduce(
        (acc, valor) => (acc += valor)
      );
      setsomaValorProdutos(somaTotal);
    }
  }

  function converterParaReal(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <ModalCarrinhoContext.Provider
      value={{
        calculoFrete,
        puxarPrecosProdutosCarrinho,
        converterParaReal,
        subtotal,
        frete,
        somaValorProdutos,
      }}
    >
      {children}
    </ModalCarrinhoContext.Provider>
  );
}
