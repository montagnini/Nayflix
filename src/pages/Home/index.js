import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';



function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>
      <BannerMain
      
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={'O que é Front-End? '}
      />

      <Footer/>
    </div>
  );
}

export default Home;