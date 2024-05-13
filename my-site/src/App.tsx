import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';
import Redirect from './components/Redirect';
import Experience from './pages/Experience';
import Nav from './components/Nav';

import './App.css';


function App() {

  const SHOW_SIGNALS = false;

  return (
    <>
      <div className='flex flex-row print:invisible relative'>
        <Nav navItems={[
          {
            text: 'Resume',
            link: '/resume'
          },
          {
            text: 'Experience',
            link: '/experience'
          }
        ]}/>
        {
          (SHOW_SIGNALS) ?
            <div className='flex flex-row pr-4'>
              {/* SIGNALS FOR WHAT RESPONSIVE WIDTHS ARE FIRING */}
              <span className='text-gray-400 sm:text-red-500'>SM</span>&nbsp;|&nbsp;
              <span className='text-gray-400 md:text-red-500'>MD</span>&nbsp;|&nbsp;
              <span className='text-gray-400 lg:text-red-500'>LG</span>&nbsp;|&nbsp;
              <span className='text-gray-400 xl:text-red-500'>XL</span>&nbsp;|&nbsp;
              <span className='text-gray-400 2xl:text-red-500'>2XL</span>
            </div>
          :
            null
        }
      </div>
      <div className='mbw-min-w'>
        <HashRouter>
          <Routes>
            <Route path="*" element={<Redirect to="/resume" /> } />
            <Route path="/" element={<Redirect to="/resume" /> } />
            <Route path="/resume" element={<Resume /> } />
            <Route path="/experience" element={<Experience /> } />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
