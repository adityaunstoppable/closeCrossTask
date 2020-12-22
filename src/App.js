import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import SideBar from './SideBar';
import "./App.css"

function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
      </div>

      <hr style={{background: "#9AC802", height:"2px" ,border:"none" }} />

      <div className="sideAndNav">
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
