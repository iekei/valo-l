import React, { useState } from 'react';

function AboutMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .about-toggle-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #ff4655;
          color: white;
          border: none;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255, 70, 85, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(255, 70, 85, 0.6);
        }

        .about-toggle-btn.open {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: none;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 98;
          animation: fadeIn 0.3s ease forwards;
        }

        .about-sidebar {
          position: fixed;
          top: 0;
          right: -350px;
          width: 350px;
          height: 100vh;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
          z-index: 99;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          color: #f8fafc;
        }

        .about-sidebar.open {
          transform: translateX(-350px);
        }

        .sidebar-content {
          padding: 80px 30px 40px 30px;
          height: 100%;
          overflow-y: auto;
          box-sizing: border-box;
        }

        .sidebar-content h2 {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 0 0 4px 0;
          text-transform: uppercase;
        }

        .sidebar-content .subtitle {
          color: #ff4655;
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 40px 0;
        }

        .menu-section {
          margin-bottom: 30px;
        }

        .menu-section h3 {
          font-size: 14px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 8px;
          margin: 0 0 12px 0;
        }

        .menu-section p, .menu-section li {
          font-size: 14px;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .menu-section ul {
          padding-left: 20px;
          margin: 0;
        }

        .menu-link {
          display: inline-block;
          width: 100%;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          text-align: center;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .menu-link:hover {
          background: #ff4655;
          border-color: #ff4655;
          box-shadow: 0 4px 12px rgba(255, 70, 85, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <button 
        className={`about-toggle-btn ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Aboutメニューを開く"
      >
        {isOpen ? '✕' : 'ℹ'}
      </button>

      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)} />}

      <nav className={`about-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h2>About Project</h2>
          <p className="subtitle">VALORANT Lineups</p>
          
          <div className="menu-section">
            <h3>概要</h3>
            <p>このサイトは、VALORANTの各エージェントの定点（ラインナップ）をインタラクティブなマップで素早く確認できるチュートリアルツールです。</p>
          </div>

          <div className="menu-section">
            <h3>技術スタック</h3>
            <ul>
              <li>React / React-Router</li>
              <li>AWS (DynamoDB, Lambda)</li>
              <li>SCSS / JavaScript</li>
            </ul>
          </div>

          <div className="menu-section">
            <h3>リンク</h3>
            <a href="https://valorant-lineups.com" target="_blank" rel="noreferrer" className="menu-link">
              公式サイトを見る
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AboutMenu;
