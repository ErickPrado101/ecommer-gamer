import React from 'react';
import Produtos from './Produtos.js'

const ListaProdutos = () => {

    function orgPreco(event) {
        event.preventDefault()
    }

    function orgScore(event) {
        event.preventDefault()
    }

    function orgAZ(event) {
        event.preventDefault()
    }
    return (            
            <div className="mainContent">
                <div className="headerLista">
                    <h1>Lista de Produtos</h1>
                    <p>Ordenar por: </p>
                    <button className="btn" onClick={orgPreco}>Preço</button>
                    <button className="btn" onClick={orgScore}>Popularidade(Score)</button>
                    <button className="btn" onClick={orgAZ}>Ordem Alfabética</button>
                </div>
                <Produtos />
            </div>
            
    )
}

export default ListaProdutos
