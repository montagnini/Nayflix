import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


function Erro404() {
  return (
    <div>
      Erro 404
    </div>
  )
}
ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/" component={Home} exact />
      <Route component={Erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);