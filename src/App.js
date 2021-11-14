import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Peoples from './peoples'

import Person from './person'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Peoples/>} />
        <Route path="/person/:id"  element={<Person/>} />
      </Routes>
    </Router>
  );
}

export default App;
