import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ColorPalette } from './components/ColorPalette';
import { Typography } from './components/Typography';
import { LogoSection } from './components/LogoSection';
import { BrandValues } from './components/BrandValues';
import { BrandVoice } from './components/BrandVoice';
import { MarketAssets } from './components/MarketAssets';
import { Mockups } from './components/Mockups';
import { Photography } from './components/Photography';
import { Downloads } from './components/Downloads';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--em-white)', color: 'var(--em-black)' }}>
      <Navbar />
      <main>
        <Hero />
        <ColorPalette />
        <Typography />
        <LogoSection />
        <BrandValues />
        <BrandVoice />
        <MarketAssets />
        <Mockups />
        <Photography />
        <Downloads />
      </main>
      <Footer />
    </div>
  );
}

export default App;
