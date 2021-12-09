import './App.css';
import React, { useContext }  from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cart from './Cart/Cart';




function App() {
  return (
<>
    <Router>
      

        <NavBar />
       
      

      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/cart" component={Cart} />


      </Switch>

    </Router>
    </>
  );
}

export default App;
