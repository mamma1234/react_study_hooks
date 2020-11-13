import React, { Component } from "react";

class RefSample extends Component {
  state = {
    height: 0
  };

  input = null;
  box = null;

  handleClick = () => {
    this.input.focus();
  };

  componentDidMount() {
    this.setState({
      height: this.box.clientHeight
    });
  }

  render() {
    return (
      <div>
        <input
          id="a"
          ref={(ref) => {
            console.log(ref);
            this.input = ref;
          }}
        />
        <button onClick={this.handleClick}>Focus Input</button>
        <div
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <h4>TITLE</h4>
          <p>Content</p>
        </div>
        <p>
          <b>height:</b> {this.state.height}
        </p>
      </div>
    );
  }
}

export default RefSample;
