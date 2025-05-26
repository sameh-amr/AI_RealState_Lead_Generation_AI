import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SITE_TITLE } from './utils/constants';
import { BubbleChat } from 'flowise-embed-react'


function App() {
  useEffect(() => {
    // Update the page title
    document.title = SITE_TITLE;
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>
      <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1000 }}>
        <BubbleChat
          chatflowid="91319eb7-844a-4d96-9d76-26bb2c5a1595"
          apiHost="https://flowise-fwh0.onrender.com"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;