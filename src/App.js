import React from 'react';
import './App.css';
import ZipSearch from './components/ZipSearch'

function App() {
  return (
    <div className="container">
      <br></br><br></br>
      <h1 className="App-header"> City search based on Zip Code</h1>
      <ZipSearch />
    </div>
  );
}

export default App;