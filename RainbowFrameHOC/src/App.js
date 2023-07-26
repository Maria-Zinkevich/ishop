import React, { Component } from 'react';
//import RainbowFrame from './components/RainbowFrame';
import DoubleButton from './components/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

const FramedDoubleButton = withRainbowFrame(DoubleButton)(colors);

class App extends Component {
  render() {
    return (
      <div className="App">
        <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => console.log(num) } >в студёную зимнюю</DoubleButton>
        <FramedDoubleButton caption1="я из лесу вышел" caption2="мороз" cbPressed={ num => console.log(num) } >был сильный</FramedDoubleButton>
      </div>
    );
  }
}

export default App;
