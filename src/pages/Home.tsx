import React from 'react';
import Layout from '../components/layout/Layout';
import Contact from '../components/sections/Contact';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
