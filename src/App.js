import React from 'react';
import Home from '../src/component/Home'
import UserDetails from './component/UserDetails'
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router'

function App() {
  return (
    <div className="App container">
  
      <Home/>

<Switch>

  <Route path="/" exact component={Home}/>
  <Route path="/userdetails" component={UserDetails}/>

</Switch>

    </div>

  );
}

export default App;
