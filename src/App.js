import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import SearchPage from './pages/Search/SearchPage';
import SideBar from './components/SideBar/SideBar';
import { Container, Row, Col } from 'reactstrap';
import LibraryPage from './pages/Library/LibraryPage';

function App() { 
  return (
    <Router>
      <Container fluid>
        <Row noGlutters={true}>
          <Col xs="2"><SideBar /></Col>
          <Col>
            <div className="main-page">
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/search" component={SearchPage}></Route>
              <Route path="/library" component={LibraryPage}></Route>
            </div>
          </Col>
        </Row>
      </Container>    
    </Router>
  );
}

export default App;
