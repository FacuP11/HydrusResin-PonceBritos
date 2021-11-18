import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div >
      <br />
      <NavBar />
      <br />
      <ItemListContainer />
      <br />
      <ItemCount />
    </div>
  );
}

export default App;
