import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero1 from './components/Hero1/Hero1';
import Hero2 from './components/Hero2/Hero2';
import SpecialtyGrid from './components/SpecialtyGrid/SpecialtyGrid';
import Background from './components/Background/Background';
import Hero3 from './components/Hero3/Hero3';
import Intro from './components/Intro/Intro';
import Faq from './components/Faq/Faq';
import Cta from './components/Cta/Cta';
import Process from './components/Process/Process';
import Office from './components/Office/Office'
import Footer from './components/Footer/Footer';
import BottomFooter from './components/BottomFooter/BottomFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>

        <Hero1 />
        <Hero2 />
        <Process />
        <SpecialtyGrid />
        <Office />
        <Hero3 />
        <Intro />
        <Background />        
        <Faq />
        <Cta />
      </main>

      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;