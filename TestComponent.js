// import React, {Component} from "react"; no need in old ways of initalization

var createReactClass = require("create-react-class");

// class TestComponent extends Component{
//     render() {
//         return<h1> in TEst Component </h1>
//     }
// }

// var TestComponent = createReactClass({
//   render: function () {
//     return <h1> In TestComponen with old way: {this.props.name}</h1>;
//   },
// });

//---------- increement button functionality --------------------

var TestComponent = createReactClass({
  render: function () {
    return (
      <>
        <h1> In Test Component with old way : {this.props.name}</h1>
        Count : {this.state.count}
        <br />
        <button onClick={this.onClickIncreementHandler}> Increement</button>
        <button onClick={this.onClickDecreementHandler}> Decreement</button>
      </>
    );
  },

  getInitialState: function () {
    return {
      count: 0,
    };
  },

  onClickIncreementHandler: function () {
    this.setState({ count: this.state.count + 1 });
  },

  onClickDecreementHandler: function () {
    this.setState({ count: this.state.count - 1 });
  },
});

export default TestComponent;
