import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Speaker } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="stickyNav gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg">
        <Header />
      </div>
      <Possibility />
      <Brand />
      <WhatGPT3 />
      <CTA />
      <Blog />
      <Speaker />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
