// import React, { Component } from 'react';

// class BR2JSX extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       words: props.text
//     };
//   };
//   render() {
//     let wordsArray = this.state.words.split(/<br\s*\/?>/i)
//     let wordsArrayWithBr = []
//     wordsArray.forEach((element,index) => {
//       if (index) {
//         wordsArrayWithBr.push(<br key={index} />)
  
//       }
//       wordsArrayWithBr.push(element)
     
//     });

//     return (
//       <div>
//         {wordsArrayWithBr.map(elem => elem)}
//       </div>
//   )
//   }
// }

// export default BR2JSX;

import React, { Component } from 'react';

class BR2JSX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: props.text,
      wordsArrayWithBr: []
    };
  };

  componentDidMount() {
    this.processedWords()
  }
  processedWords =() => {
    let wordsArray = this.state.words.split(/<br\s*\/?>/i)
    let resArr = []
    wordsArray.forEach((element,index) => {
      if (index) {
        resArr.push(<br key={index} />)
      }
      resArr.push(element)
      
    });
    this.setState({wordsArrayWithBr:resArr})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.text !== prevProps.text) {
      this.processedWords()
    }
  }

  render() {
    return (
      <div>
        {this.state.wordsArrayWithBr.map(elem => elem)}
      </div>
  )
  }
}

export default BR2JSX;