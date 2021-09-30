import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//import form here
//import gif list here
//import favorites list

function App(props) {
  return (
    <div>
      <Router>
        <div className="nav">
          <Link to="/search">Search</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
        <Route exact path="/">
        </Route>
        <Route exact path="/search">
      <h1>Giphy Search!</h1>
      {/* go to form component */}
      {/* go to displayGifs */}
      </Route>
        <Route exact path="/favorites">
          <h1>Giphy Favorites!</h1>
        {/* favorites */}
      </Route>
      </Router>
    </div>
  );
}

export default App;
