import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <label className="label" htmlFor="name">
          Enter name:
        </label>
        <input type="text" id="name" />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Submit
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
