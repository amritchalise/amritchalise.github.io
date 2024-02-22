import React from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

// App component
const App = () => (
  <div className="app">
    <About/>
    <Skills/>
    <Projects/>
  </div>
);

export default App;
