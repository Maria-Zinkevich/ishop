import React, { Component } from 'react';

class DoubleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        caption1: props.caption1,
        caption2: props.caption2,
    };
  };

  handleButtonClick = (num) => {
    this.props.cbPressed(num);
  };

  render() {
    return (
        <div>        
            <input type="button" value={this.state.caption1} onClick={() => this.handleButtonClick(1)} />
                {this.props.children}
            <input type="button" value={this.state.caption2} onClick={() => this.handleButtonClick(2)} />
        </div>
      );
  }
}

export default DoubleButton;