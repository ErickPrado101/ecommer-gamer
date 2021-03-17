import React from "react";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import CorpoPagina from "./Components/CorpoPagina.js";
import MensagemProdutoComprado from "./Helpers/MensagemProdutoComprado.js";
import { AppContext } from "./Context/AppContext.js";

function App() {
  const { aparecerMensagemComprado } = React.useContext(AppContext);

  return (
    <div id="app">
      {aparecerMensagemComprado && <MensagemProdutoComprado />}
      <Header />
      <CorpoPagina />
      <Footer />
    </div>
  );
}

export default App;
