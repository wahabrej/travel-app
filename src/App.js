import React from 'react';
import Carousel from './component/Carousel';
import Destinations from './component/Destinations';
import Footer from './component/Footer';
import Hero from './component/Hero';

import Search from './component/Search';
import Selects from './component/Selects';
import Navbar from './component/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
     
    </div>
  );
}

export default App;
