import React from "react";
import styles from "./CorpoPagina.module.css";
import Carregando from "../Helpers/Carregando.js";
import Produto from "./Produto/ListaProduto.js";
import Ordenar from "./Produto/Ordenar.js";
import { AppContext } from "../Context/AppContext.js";

const CorpoPagina = () => {
  const { produto, loading } = React.useContext(AppContext);

  if (produto === null) return null;
  return (
    <main className={styles.mainContent}>
      <Ordenar />
      {loading ? (
        <Carregando />
      ) : (
        <section className={styles.containerListaProdutos}>
          <div className={styles.listaProdutos}>
            <Produto />
          </div>
        </section>
      )}
    </main>
  );
};

export default CorpoPagina;
