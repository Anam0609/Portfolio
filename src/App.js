import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Cards from './components/work/Cards';
import Skills from './components/skills/Skills';
import Testcards from './components/testimonials/Testcards';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <>
      <Home/>
      <About />
      <Cards />
     <Skills/>
      <Testcards />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
