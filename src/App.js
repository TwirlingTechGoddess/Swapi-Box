import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constuctor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  ComponentWillMount = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;