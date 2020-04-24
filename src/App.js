
import React, {Component, createContext  } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter> 
        {/* < GlobalContext /> */}
        < HomePage />
        < SingleCountry/>
        <Navbar />
        <Switch>
          <Route path ='/global' component={HomePage} /> 
          <Route path ='/country' component={SingleCountry} />

        </Switch>
        
        
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
