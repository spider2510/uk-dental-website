import React, { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import { Header } from './components/Header';
import JsonData from "./data/data.json";
import {Gallery} from './components/Gallery'
import { Features } from './components/Features';
import { About } from './components/About';
import { HowitWork } from './components/HowitWork';
import { Testimonials } from './components/Testimonials';
import { QnA } from './components/QnA';
import { Contact } from './components/Contact';
import { TeamSection } from './components/TeamSection';

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <Header data={JsonData.Header}/>
      <HowitWork data={JsonData.Services} />
      <Features data={JsonData.Features} />
      <Gallery data={JsonData.Gallery} />

      <About data={JsonData.About} />
      <TeamSection />
      <QnA data={JsonData.Team} />
      <Testimonials data={JsonData.Testimonials} />
      <Contact data={JsonData.Contact} />
    </div>
  );
}

export default App;
