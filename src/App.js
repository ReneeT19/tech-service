import React from 'react'
import { Footer, Blog, WreTech, Header } from './containers';
import { CTA, Navbar, Pricing, Contact } from './components';
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
              <Route path="wreTech" element={<WreTech/>}/>
              <Route path="blogs" element={<Blog/>}/>
            </Routes>
        </div>
          <CTA />
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
