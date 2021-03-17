import React from "react";
import { ModalCarrinhoContext } from "../../Context/ModalCarrinhoContext";
import styles from "./ModalValorPagar.module.css";

const ModalValorPagar = ({ carrinho }) => {
  const {
    converterParaReal,
    subtotal,
    frete,
    somaValorProdutos,
  } = React.useContext(ModalCarrinhoContext);

  return (
    <div className={styles.modalValorPagar}>
      <p>
        <span>Frete: </span>
        {converterParaReal(frete)}
      </p>
      <p>
        <span>SubTotal:</span>{" "}
        {carrinho > 0 ? converterParaReal(somaValorProdutos) : "0"}
      </p>
      <p>
        <span>Total:</span> {converterParaReal(subtotal)}
      </p>
      <button className="btn">Finalizar Compra</button>
    </div>
  );
};

export default ModalValorPagar;
