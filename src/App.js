import React from 'react';
import './assets/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'

function App() {
  return (
    <div style={{height: '1500px', backgroundColor: 'indigo'}}>
     <Header />
     <Featured />
    </div>
  );
}

export default App;
