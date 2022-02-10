import React from "react";
import "./App.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Dance from "./pages/dance";
import SocialInfo from "./pages/Info/social";
import LatinInfo from "./pages/Info/latin";
import StandardInfo from "./pages/Info/smooth-standard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <header className="App-header">
          <Navbar bg="primary" variant="dark" sticky="top">
            <Container
              style={{ fontFamily: "apple chancery", fontWeight: "bold" }}
            >
              <Navbar.Brand href="/">DanceFinder</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <NavDropdown title="Info">
                  <NavDropdown.Item href="/info/smooth-standard">
                    Smooth/Standard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/info/rhythm-latin">
                    Rhythm/Latin
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/info/social">Social</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Dance />} />
          <Route path="/info/smooth-standard" element={<StandardInfo />} />
          <Route path="/info/rhythm-latin" element={<LatinInfo />} />
          <Route path="/info/social" element={<SocialInfo />} />
        </Routes>
        <footer className="App-footer">
          <p>
            Created by: Ashley Parks &ensp;
            <a href="https://github.com/amparks100">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
