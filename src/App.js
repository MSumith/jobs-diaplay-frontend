import data from "./data.json"
import Jobs from "./components/Jobs";
import './App.css';
import React from 'react';


function App() {
  return (
    <div>
      <div className="header">
        <div className="logo1">
          <h1>Technocolabs</h1>
          
        </div>
        
      

      </div>
      <Jobs data={data} />
        
        


      
    </div>
  );
}

export default App;
