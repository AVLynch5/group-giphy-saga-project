import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';
import FavoriteList from '../FavoriteList/FavoriteList';

//import form here
//import gif list here
//import favorites list

function App(props) {
  return (
    <div>
      <Router>
        <div className="nav">
          <Link to="/">Search</Link> 
          <br/>
          <Link to="/favorites">Favorites</Link>
        </div>
        <Route exact path="/">
          {/* go to displayGifs */}
          <h1>Giphy Search!</h1>
          <Search />
        </Route>
          {/* <Route exact path="/search">
        </Route> */}
        <Route exact path="/favorites">
          <h1>Giphy Favorites!</h1>
          <FavoriteList />
        {/* favorites */}
      </Route>
      </Router>
    </div>
  );
}

export default App;
