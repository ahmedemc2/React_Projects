import React, { Component } from "react";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Container from "./components/Container";
import Elements from "./components/Elements";
class App extends Component {
  state = {};
  render() {
    return (
      <Container bg="green">
        <Elements />
      </Container>
    );
  }
}

export default App;
