import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>
      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].url}
      videoDescription={"TESTESTESTESTE"}/>
      <Carousel
      ignoreFirstVide
      category={dadosIniciais.categorias[0]}/>
    </div>
  );
}

export default App;