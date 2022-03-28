import React, { useState } from 'react';
import { Button, Nav, Container, Navbar, NavDropdown  } from 'react-bootstrap';
import './App.css';
import Data from './data';
import Content from './components/Content';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import axios from 'axios';


function App() {

  let [shoes, setShoes] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);

  return (
    <>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
            <button className='btn btn-primary' onClick={() => {

              //로딩중UI
              // axios.post('serverURL', { id: 'codingapple', pw: 1234 });
              
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {  
                  //로딩중UI 삭제
                  let data = result.data;
                  setShoes([...shoes, ...data]);
                })
                .catch(() => {  
                  console.log('실패했어요')
                })
            }}>더보기</button>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes = {shoes} 재고={재고} 재고변경={재고변경} />
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
