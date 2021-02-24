import React from "react";

export const AppContext = React.createContext()

export function GeneralContext({children}) {
    const [carrinho, setCarrinho] = React.useState(0);
    const [produto, setProduto] = React.useState(null);
    const [ordem, setOrdem] = React.useState(null);
    const [carregado, setCarregado] = React.useState(null);
    const [paginaCarrinho, setPaginaCarrinho] = React.useState(false);

    React.useEffect(() => {
        fetch("./products.json")
          .then((r) => r.json())
          .then((json) => {
            setProduto(json);
            setCarregado(true)
          });
      }, []);

      React.useEffect(() => {
        setProduto(ordem);
      }, [ordem]);


    return (
        <AppContext.Provider value={{
            carrinho,
            setCarrinho,
            setOrdem,
            setPaginaCarrinho,
            produto,
            ordem,
            carregado,
            paginaCarrinho
        }}>
            {children}
        </AppContext.Provider>
    )
}