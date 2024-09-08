import React, { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import { Header } from './components/Header';
import JsonData from "./data/data.json";
import { Gallery } from './components/Gallery'
import { Features } from './components/Features';
import { About } from './components/About';
import { HowitWork } from './components/HowitWork';
import { Testimonials } from './components/Testimonials';
import { QnA } from './components/QnA';
import { Contact } from './components/Contact';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Header data={JsonData.Header} />
      <HowitWork data={JsonData.Services} />
      <About data={JsonData.About} />
      <Features data={JsonData.Features} />
      <Testimonials data={JsonData.Testimonials} />
      <Gallery data={JsonData.Gallery} />

      <TeamSection />
      <Contact data={JsonData.Contact} />
      <QnA data={JsonData.Team} />
      <Footer />
    </div>
  );
}

export default App;
