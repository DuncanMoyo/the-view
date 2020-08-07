import React from 'react';
import './assets/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueInfo from './components/VenueInfo';

function App() {
  return (
    <div style={{height: '1500px', backgroundColor: 'indigo'}}>
     <Header />
     <Featured />
     <VenueInfo />
    </div>
  );
}

export default App;
