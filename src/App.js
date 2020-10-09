import React from 'react';
import { Homepage } from './components/Homepage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/Post';
import { AddPost } from './components/AddPost';
import Nav from './components/nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/admin" component={AddPost} />
          <Homepage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
