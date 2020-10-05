import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
      </div>
    );
  }
}

export default App;
