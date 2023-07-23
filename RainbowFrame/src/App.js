import React, { Component } from 'react';
import RainbowFrame from './components/RainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <RainbowFrame colors={colors} >{'hi'}</RainbowFrame>
      </div>
    );
  }
}

export default App;
