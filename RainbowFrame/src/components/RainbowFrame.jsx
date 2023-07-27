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
      childToRender: props.children
    };
  };

  componentDidMount() {
    this.processedChildToRender();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.colors !== prevProps.colors) {
      this.processedChildToRender();
    }
  }

  processedChildToRender =() => {
    let updateChildToRender = this.props.children;
    this.props.colors.forEach((color) => {  
      updateChildToRender = <div style={{padding: "5px",border:`solid 5px ${color}`}}>{updateChildToRender}</div> 
    })
    this.setState({childToRender: updateChildToRender})
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
