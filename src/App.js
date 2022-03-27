import React, { useState } from 'react';
import { Button, Nav, Container, Navbar, NavDropdown  } from 'react-bootstrap';
import './App.css';
import Data from './data';
import Content from './components/Content';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';


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
                  <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
                  <Nav.Link> <Link to="/detail">Detail</Link></Nav.Link>
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
        
        
      <Switch>
      <Route exact path="/">
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
              }
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes = {shoes} />
      </Route>

      <Route path="/:id">
        <div>아무거나 적었을때 이거 보여주셈</div>  
      </Route>
      </Switch>
      {/* <Route path="/어쩌구" component={Modal}></Route> */}


        
    </>
  );
};

export default App;
