import React from 'react'
import { Footer, Blog, Possibility, Features, WreTech, Header } from './containers';
import { CTA, Brand, Navbar, Pricing, Contact } from './components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
            <Routes>
              <Route path="/" element={<Header/>}/>
              <Route path="pricing" element={<Pricing/>}/>
              <Route path="contact" element={<Contact/>}/>
            </Routes>
        </div>
          <Brand />
          <WreTech />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
