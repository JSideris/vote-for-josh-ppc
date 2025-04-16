import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Bio from './components/Bio/Bio';
import Platform from './components/Platform/Platform';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Footer from './components/Footer/Footer';
import { DonationModalProvider } from './components/DonationModalContext';

const App: React.FC = () => {
  return (
    <>
      <DonationModalProvider>
        {/* Donation Modal */}
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <Header />
        <Hero />
        
        <main id="main-content">
          <Bio />
          <Platform />
          <GetInvolved />
        </main>
        
        <Footer />
      </DonationModalProvider>
    </>
  );
}

export default App;