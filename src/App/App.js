import 'bulma/css/bulma.min.css';
import './App.css';
import Navbar from '../navbar';
import React from 'react';
import logo from "../images/Classes-Manager.mp4";

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <video className='videoTag' autoPlay loop muted>
          <source src={logo} max-width="80" alt='classes manager logo' />
        </video>
      </header>
    </div>
  );
}

export default App;
