import React from "react";
import styles from "./Carregando.module.css"

const Carregando = () => {
  return (
    <div className={styles.loading}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Carregando;
