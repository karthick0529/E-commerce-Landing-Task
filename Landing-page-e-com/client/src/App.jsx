import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
