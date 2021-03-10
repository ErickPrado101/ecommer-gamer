import React from 'react'
import styles from './MensagemProdutoComprado.module.css'

const MensagemProdutoComprado = () => {
    return (
        <div className={styles.containerMensagemProdutoComprado}>
            <img className={styles.carrinhoAnim} src="./assets/carrinho.svg" alt="animação carrinho"/>
            <p>Produto adicionado ao carrinho.</p>
        </div>
    )
}

export default MensagemProdutoComprado
