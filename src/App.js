import React, { Component } from "react";
import Header from "./components/Header/index";
import "./app.scss";
import Headline from "./components/Headline/Headline";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggas@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
