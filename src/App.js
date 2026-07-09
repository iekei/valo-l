import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'pages/Navbar';
import LineupSite from 'pages/LineupSite'; 
import Info from 'pages/Info';
import DesignLineup from 'pages/DesignLineup';
import SelectLineupPage from 'pages/SelectLineupPage';
import EditLineup from 'pages/EditLineup';
import AboutMenu from 'AboutMenuComponent'; // 💡頭の「./」を外してプロジェクトの絶対ルールに合わせました

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
