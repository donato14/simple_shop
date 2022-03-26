import React, { useState } from 'react';
import { Button, Nav, Container, Navbar, NavDropdown  } from 'react-bootstrap';
import './App.css';
import Data from './data';
import Content from './components/Content';

function App() {

  let [shoes, setShoes] = useState(Data);

  return (
  <>
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div className="jumbotron">
      <div className="text-container">
        <h1 className="display-4">20% Season OFF</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
          {
            shoes.map((a, i) => {
              return <Content shoes={shoes[i]} key={i}/>
            })
          };
      </div>
    </div>
  </>
  );
};

export default App;
