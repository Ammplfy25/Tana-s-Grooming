import React from 'react';
import { Hero } from '../components/Hero';
import { TrustIndicators } from '../components/TrustIndicators';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <About />
      <Testimonials />
    </>
  );
};