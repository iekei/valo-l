import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LineupSite from './LineupSite'; 
import Info from './Info';
import DesignLineup from './DesignLineup';
import SelectLineupPage from './SelectLineupPage';
import EditLineup from './EditLineup';
import AboutMenu from './AboutMenuComponent';

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
