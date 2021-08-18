import React from 'react'
import MyRouter from './myRouter';
import Navbar from './components/navbar/navbar.component';
import FOOTER from "./components/footer/Footer";
import './App.css';

function App() {

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <MyRouter />
      </div>
      <div>
      </div>
      <div className="app-footer"> 
        <FOOTER />
      </div>
      
    </div>
  );
}

export default App;
