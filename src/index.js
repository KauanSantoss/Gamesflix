import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import CadastroVideo from './components/pages/cadastro/Video';
import CadastroCategoria from './components/pages/cadastro/categoria'

//Desafio master blaster na descrição
const Pagina404 = () => (<div>Pagina404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );
  
  