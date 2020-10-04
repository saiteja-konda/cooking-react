import React from 'react';
import { Homepage } from './components/Homepage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={Post} />
        <div className="App">
          <Homepage />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
