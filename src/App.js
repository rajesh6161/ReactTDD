import React, { Component } from "react";
import Header from "./components/Header/index";
import "./app.scss";
import Headline from "./components/Headline/Headline";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!"  />
        </section>
      </div>
    );
  }
}

export default App;
