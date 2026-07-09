import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LineupSite from './components/LineupSite'; 
import Info from './components/Info';
import DesignLineup from './components/DesignLineup';
import SelectLineupPage from './components/SelectLineupPage';
import EditLineup from './components/EditLineup';
import AboutMenu from './AboutMenuComponent'; // 

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AboutMenu />
        <Routes>
          <Route path="/" element={<LineupSite />}>
            <Route path="/:lineupId" element={<LineupSite />} />
          </Route>
          <Route path="/about" element={<Info />} />
          <Route path="/send" element={<DesignLineup />} />
          <Route path="/select" element={<SelectLineupPage />} />
          <Route path="/edit" element={<EditLineup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
