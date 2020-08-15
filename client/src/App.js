import React, { Component } from "react";
import List from "./List";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">TODO </h1>
            <img src={require('./todo-list-1942026-1642356.png')} />
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
