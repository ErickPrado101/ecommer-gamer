import React from "react";

export const AppContext = React.createContext()

export function GeneralContext({children}) {
    const [carrinho, setCarrinho] = React.useState(0);
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const [paginaCarrinho, setPaginaCarrinho] = React.useState(false);
    const [produtoCarrinho, setProdutoCarrinho] = React.useState([]);
    const [aparecerMensagemComprado, setAparecerMensagemComprado] = React.useState(false);

    React.useEffect(() => {
      setLoading(true);
      fetch("./products.json")
        .then((r) => r.json())
        .then((json) => {
          setProduto(json);
          setLoading(false)
        });
    }, []);

      function handleMensagemDeCompra() {
        const timer = setTimeout(() => {
          setAparecerMensagemComprado(false)
          clearTimeout(timer)
        }, 2000)
          setAparecerMensagemComprado(true)
      }

    return (
        <AppContext.Provider value={{
            carrinho,
            setCarrinho,
            setPaginaCarrinho,
            produto,
            loading,
            paginaCarrinho,
            setProdutoCarrinho,
            produtoCarrinho,
            aparecerMensagemComprado,
            setAparecerMensagemComprado,
            handleMensagemDeCompra,
        }}>
            {children}
        </AppContext.Provider>
    )
}