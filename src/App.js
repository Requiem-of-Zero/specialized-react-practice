import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello</h1>
        <NavBar />
        <Button/>
      </>
    );
  }
}

export default App;
