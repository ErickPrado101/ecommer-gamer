import React from 'react';
import Header from './Components/Header.js';
import Carregando from './Components/Carregando.js';
import Footer from './Components/Footer.js';
import ListaProdutos from './Components/ListaProdutos.js';


function App() {
  return (
    <div id="app">
      <Header />
      <Carregando />
      <ListaProdutos />
      <Footer />
    </div>
  );
}

export default App;
