import React, { Component } from 'react';

import bg from './assets/images/Group.png'
// Componets
import NavBar from './componets/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        {/*********** Remover depois **********/}
        <div>
          <img src={bg} title="x" alt="c"></img>
        </div>
        <div>
          <img src={bg} title="x" alt="c"></img>
        </div>
        <div>
          <img src={bg} title="x" alt="c"></img>
        </div>
        <div>
          <img src={bg} title="x" alt="c"></img>
        </div>
      </div>
      
    );
  }
}

export default App;
