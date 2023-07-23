// import React, { Component } from 'react';

// class RainbowFrame extends Component {
//   render() {
//     let childToRender = this.props.children

//     this.props.colors.forEach((color)=>{  
//       childToRender = <div style={{padding: "5px",border:`solid 5px ${color}`}}>{childToRender}</div> 
//     })

//     return (
//       <div>
//         {childToRender}
//       </div>
//     )
//   }
// }

// export default RainbowFrame;

import React, { Component } from 'react';

class RainbowFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      childToRender: this.props.children
    };
  };

  componentDidMount() {
    this.processedChildToRender();
  }

  componentDidUpdate(prevProps, prevState) {
    //корректна ли эта проверка?
    //как проверить изменение слова из App.js 'hi'? 
    if (this.props.colors !== prevProps.colors) {
      this.processedChildToRender();
    }
  }

  processedChildToRender =() => {
    //здесь если я не определю в updateChildToRender = this.state.childToRender у меня 
    //появляются только рамки без текста, почему? ведь при первом рендере должен попасть
    //первый childToRender: this.props.children, а это 'hi' из App.js
    //let updateChildToRender;
    let updateChildToRender = this.state.childToRender;
    this.state.colors.forEach((color) => {  
      updateChildToRender = <div style={{padding: "5px",border:`solid 5px ${color}`}}>{updateChildToRender}</div> 
      this.setState({childToRender: updateChildToRender})
    })
  }

  render() {
    return (
      <div>
        {this.state.childToRender}
      </div>
    )
  }
}

export default RainbowFrame;
