import React, { useState, useEffect } from 'react'

const Api = () => {

    const [produto, setProduto] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(r => r.json())
        .then(json => {
            setProduto(json)     
        })
    }, [])

    const listItem = produto.map((item) =>
        <div className="produto" key={item.id}>
            <img id="product" src='./assets/fifa-18.png' alt={item.name} />
            <p>Preço: {item.price}</p>
            <p>Nome: {item.name}</p>        
            <p>Score: {item.score}</p>
        </div>
)

    return (
        <div className="listaProdutos">
            {listItem}            
        </div>
    )
}

export default Api
