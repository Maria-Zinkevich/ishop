import React from 'react';

const withRainbowFrame = (colors) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      let content = <WrappedComponent {...this.props} />;
      colors.forEach((color) => {
        content = <div style={{padding: "5px",border:`solid 5px ${color}`}}>{content}</div> ;
      });
      return content;
    }
  };
};

export default withRainbowFrame;