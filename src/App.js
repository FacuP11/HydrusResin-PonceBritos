import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div >
      <br />
      <NavBar />
      <br />
      <ItemListContainer />
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
