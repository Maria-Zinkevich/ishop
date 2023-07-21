import React, { Component } from 'react';

class BR2JSX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsArray: props.text.replace(/<[^>]+>/g, ',').split(',')
    };
  };
  render() {
    return (
      <div>
          {this.state.wordsArray.map((word, index) => <p key={index}>{word}</p>)}
      </div>
    );
  }
}

export default BR2JSX;