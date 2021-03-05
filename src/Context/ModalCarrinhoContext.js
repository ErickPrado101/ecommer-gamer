import React from "react";

export const ModalCarrinhoContext = React.createContext()

export function ModalContext({children}) {
    const [frete, setFrete] = React.useState(0);
    const [valorTotalProdutos, setValorTotalProdutos] = React.useState(0);

    function total() {
    const totalGeral = (total <= 250) ? (valorTotalProdutos + frete) : (valorTotalProdutos)
    return converterParaReal(totalGeral);
  }

  function calculoFrete(qntItens) {
    (total <= 250) ? setFrete(qntItens * 10) : setFrete('Grátis')
  }  

  function puxarPrecosProdutosCarrinho(produtoCarrinho) {
    if (produtoCarrinho.length > 0) {
      const precosDosProdutos = produtoCarrinho.map((item) => item.price);
      const somaTotal = precosDosProdutos.reduce(
        (acc, valor) => (acc += valor)
      );
      setValorTotalProdutos(somaTotal);
    }
  }

  function converterParaReal(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

    return (
        <ModalCarrinhoContext.Provider value={{
            calculoFrete,
            puxarPrecosProdutosCarrinho,
            converterParaReal,
            total,
            frete,
            valorTotalProdutos
        }}>
            {children}
        </ModalCarrinhoContext.Provider>
    )
}