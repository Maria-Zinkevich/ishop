import React, { Component } from 'react';
import BR2JSX from './components/BR2JSX';

const text="первый<br>второй<br/>третий<br />последний";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BR2JSX text={text} />
      </div>
    );
  }
}

export default App;
