import React from "react";
import "./App.css";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { Routes, Route, Router } from "react-router-dom";

import Home from "./pages/home";
import Dance from "./pages/dance";

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">DanceFinder</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dance">Dance</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dance" element={<Dance />}></Route>
        </Routes>
        <footer className="App-footer">
          <p>
            Author: Ashley Parks Github:{" "}
            <a href="https://github.com/amparks100">@amparks100</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
