import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Header from './Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Header />
    </React.StrictMode>
  );
}

export default App;
