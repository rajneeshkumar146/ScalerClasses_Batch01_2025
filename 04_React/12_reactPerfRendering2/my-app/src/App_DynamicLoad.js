// What is Dynamic Import?
// Dynamic import is a feature that allows you to import JavaScript 
// modules (including React components) dynamically and asynchronously. 
// Instead of loading all components at once, you can load them on demand, 
// which can significantly reduce the initial load time of your application. 
// This process is known as code splitting.

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';

function App() {
    const [HomePage, setHomePage] = useState(null);
    const [AboutPage, setAboutPage] = useState(null);
    const [ContactPage, setContactPage] = useState(null);

    useEffect(() => {
        // Preload HomePage component
        import('./Components/HomePage').then((module) => setHomePage(() => module.default));
    }, []);

    const loadHomePage = () => {
        import('./Components/HomePage').then((module) => setHomePage(() => module.default));
    };

    const loadAboutPage = () => {
        import('./Components/AboutPage').then((module) => setAboutPage(() => module.default));
    };

    const loadContactPage = () => {
        import('./Components/ContactPage').then((module) => setContactPage(() => module.default));
    };


    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={loadHomePage}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={loadAboutPage}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={loadContactPage}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={HomePage ? <HomePage /> : <div>Loading...</div>} />
                    <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
                    <Route path="/contact" element={ContactPage ? <ContactPage /> : <div>Loading...</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
