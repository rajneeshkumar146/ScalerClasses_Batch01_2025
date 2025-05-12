import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';

const HomePage = lazy(() => import('./Components/HomePage'));
const ContactPage = lazy(() => import('./Components/ContactPage'));
const AboutPage = lazy(() => import('./Components/AboutPage'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
