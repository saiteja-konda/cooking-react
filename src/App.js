import React from 'react';
import { Homepage } from './components/Homepage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/Post';
import { AddPost } from './components/AddPost';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/post/:id" component={Post} />
          <Route exact path ="/admin" component={AddPost}/>
          <div className="App">
            <Homepage />
          </div>
        </Switch>
      </>
    </Router>
  );
}

export default App;
