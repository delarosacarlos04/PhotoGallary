import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import Navbar from "./components/navbar.component" ;
import PhotoDisplay from "./components/photo-display.component";
import InputPhoto from "./components/photo-input.component" ;



function App() {
  return (
    <div className='change' >
      <Router >
        <div className="container" > 
          <Navbar />
          <br/>
          <Route path="/" exact component={PhotoDisplay}/>
          <Route path="/upload" exact component={InputPhoto}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
