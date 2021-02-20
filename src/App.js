import React from "react";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import ListaProdutos from "./Components/ListaProdutos.js";

function App() {

  const [carrinho, setCarrinho] = React.useState(0);

  return (
    <div id="app">
      <Header carrinho={carrinho} />
      <ListaProdutos carrinho={carrinho} setCarrinho={setCarrinho}/>
      <Footer />
    </div>
  );
}

export default App;
