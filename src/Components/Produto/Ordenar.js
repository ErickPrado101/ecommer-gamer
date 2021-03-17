import React from "react";
import styles from "./Ordenar.module.css";
import { AppContext } from "../../Context/AppContext";

const Ordenar = () => {
  const { produto, setItemAOrdernar, itemAOrdernar } = React.useContext(
    AppContext
  );

  const handleOrder = (valorParaOrganizar) => {
    setItemAOrdernar(valorParaOrganizar);
  };

  produto.sort((a, b) => {
    return a[itemAOrdernar] < b[itemAOrdernar] ? -1 : 1;
  });

  return (
    <section className={styles.headerLista}>
      <h2>Lista de Produtos</h2>
      <p>Ordenar por: </p>
      <button
        className={styles.btnOrg + " btn"}
        onClick={() => handleOrder("price")}
      >
        Preço
      </button>
      <button
        className={styles.btnOrg + " btn"}
        onClick={() => handleOrder("score")}
      >
        Popularidade (Score)
      </button>
      <button
        className={styles.btnOrg + " btn"}
        onClick={() => handleOrder("name")}
      >
        Ordem Alfabética
      </button>
    </section>
  );
};

export default Ordenar;
