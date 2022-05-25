import React from 'react'
import { Footer, Blog, Possibility, Features, WreTech, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg"> 
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WreTech />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App