import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BlogPage from './components/BlogPage';
import Login from './components/LoginPage';



function App() {
  return (
  <Router>
  <Switch>
  <Route exact path="/" component={Login} />
 <Route exact path="/blogPage" component={BlogPage}/>
  </Switch>
  </Router>
  );
}


export default App;
