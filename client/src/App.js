import React from 'react'; 

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar.jsx'
import AllRoutes from './AllRoutes'

function App() {
  return (
    <div class="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
