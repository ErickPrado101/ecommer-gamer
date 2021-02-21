import React from 'react'

const Carrinho = ({carrinho, setPaginaCarrinho}) => {

    const[frete, setFrete] = React.useState(0)

    const total = 0

    React.useEffect(() => {
        if(total < 250){
            setFrete(carrinho*10)
        }
        else {
            setFrete(0)
        }

    }, [carrinho])


    return (
        <div>
            <button onClick={() => setPaginaCarrinho(false)}>X</button>
            <div>
                <h1>Seus Produtos</h1>
                 Produtos
            </div>
            <p>Frete: {frete.toLocaleString("Pt-BR", {
                style: "currency",
                currency: "BRL"
            })}</p>
            <p>SubTotal: Soma dos Produtos</p>
            <p>Total: Soma dos produtos com frete</p>
        </div>
    )
}

export default Carrinho
