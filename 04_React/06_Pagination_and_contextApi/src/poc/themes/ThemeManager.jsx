import React from 'react'
import { useState } from 'react';
import Article from './Article'
import Footer from './Footer'
import Header from './Header'

function ThemeManager() {

    const toggleTheme = () => {
        console.log("Theme is toggled.");
    }

    return (
        <>
            <h1>ThemeManager</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

            <Header />
            <Footer />
            <Article />
        </>

    )
}

export default ThemeManager