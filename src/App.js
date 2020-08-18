import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage';
import SearchPage from './pages/Search/SearchPage';

function App() { 
  return (
    <Router>    
      <div>
        <h1>Spotify-Clone</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
        </ul>
        <div>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/search" component={SearchPage}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
