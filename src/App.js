import React from 'react'
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Carrusel from './components/carrusel/Carrusel';


function App() {
  return (
    <>
        <div id="home">
            <Header />
        </div>
        <div id="about">
            <About />
        </div>
        {/* <div id="projects">
            <Projects />
        </div> */}
        <div id="carrusel">
            <Carrusel />
        </div>
        <div id="footer">
            <Footer />
        </div>
    </>
  
  );
}

export default App;
