import React from 'react';
import Produtos from './Produtos.js'

const ListaProdutos = () => {

    function orgPreco() {

    }

    function orgScore() {

    }

    function orgAZ() {

    }
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <div>
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
