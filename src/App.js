import React from 'react'
import { Footer, Blog, Possibility, Features, WreTech, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
        <div className="body"> 
          <Navbar />
          <Header />
        </div>
        <div className="gradient__bg">
          <Brand />
          <WreTech />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
        </div>
        <Footer />
    </div>
  )
}

export default App
