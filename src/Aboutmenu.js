import React, { useState, useEffect } from 'react';

function AboutMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <style>{`
        /* --- 全体で使用するマットカラーの定義 --- */
        :root {
          --matt-black: #121212;
          --matt-dark-gray: #1e1e1e;
          --matt-white: #f8f9fa;
          --matt-light-gray: #e9ecef;
          --accent-red: #ff4655;
        }

        /* --- グローバルスタイルの上書き（マットブラック / マットホワイト） --- */
        body.theme-dark, 
        body.theme-dark #root,
        body.theme-dark .App {
          background-color: var(--matt-black) !important;
          color: var(--matt-white) !important;
        }

        body.theme-light, 
        body.theme-light #root,
        body.theme-light .App {
          background-color: var(--matt-white) !important;
          color: var(--matt-black) !important;
        }

        /* 既存のナビバーやコンポーネント背景のマット化（必要に応じて自動適用） */
        body.theme-dark nav, body.theme-dark header, body.theme-dark .navbar {
          background-color: var(--matt-dark-gray) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        body.theme-light nav, body.theme-light header, body.theme-light .navbar {
          background-color: var(--matt-light-gray) !important;
          border-color: rgba(0, 0, 0, 0.05) !important;
        }

        /* --- 左下のテーマ切り替えスイッチ --- */
        .theme-switch-container {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .theme-switch-label {
          width: 50px;
          height: 26px;
          background-color: #4a4a4a;
          display: flex;
          border-radius: 50px;
          align-items: center;
          justify-content: space-between;
          padding: 0 6px;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        body.theme-light .theme-switch-label {
          background-color: #cbd5e1;
        }

        .theme-switch-ball {
          width: 20px;
          height: 20px;
          background-color: var(--matt-white);
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        body.theme-light .theme-switch-ball {
          background-color: var(--matt-black);
          transform: translateX(24px);
        }

        .theme-icon {
          font-size: 12px;
          user-select: none;
        }

        /* --- 右上のAboutトグルボタン --- */
        .about-toggle-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--accent-red);
          color: white;
          border: none;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255, 70, 85, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(255, 70, 85, 0.5);
        }

        .about-toggle-btn.open {
          background: rgba(128, 128, 128, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(128, 128, 128, 0.3);
          color: var(--is-dark, white);
          box-shadow: none;
        }
        body.theme-dark .about-toggle-btn.open { color: var(--matt-white); }
        body.theme-light .about-toggle-btn.open { color: var(--matt-black); }

        /* --- 背景オーバーレイ --- */
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

        /* --- 右側メニューバー（テーマ連動） --- */
        .about-sidebar {
          position: fixed;
          top: 0;
          right: -350px;
          width: 350px;
          height: 100vh;
          z-index: 99;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
        }

        body.theme-dark .about-sidebar {
          background: rgba(30, 30, 30, 0.85);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--matt-white);
        }

        body.theme-light .about-sidebar {
          background: rgba(248, 249, 2fa, 0.85);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(0, 0, 0, 0.05);
          color: var(--matt-black);
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
          color: var(--accent-red);
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 40px 0;
        }

        .menu-section {
          margin-bottom: 30px;
        }

        .menu-section h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding-bottom: 8px;
          margin: 0 0 12px 0;
        }
        body.theme-dark .menu-section h3 { 
          color: #94a3b8; 
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        body.theme-light .menu-section h3 { 
          color: #64748b; 
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .menu-section p, .menu-section li {
          font-size: 14px;
          line-height: 1.6;
        }
        body.theme-dark .menu-section p, body.theme-dark .menu-section li { color: #cbd5e1; }
        body.theme-light .menu-section p, body.theme-light .menu-section li { color: #334155; }

        .menu-section ul {
          padding-left: 20px;
          margin: 0;
        }

        .menu-link {
          display: inline-block;
          width: 100%;
          padding: 12px;
          color: white !important;
          text-align: center;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.2s ease;
          box-sizing: border-box;
          background: var(--accent-red);
        }

        .menu-link:hover {
          opacity: 0.9;
          box-shadow: 0 4px 12px rgba(255, 70, 85, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* --- 左下の切り替えスイッチ構造 --- */}
      <div className="theme-switch-container">
        <div className="theme-switch-label" onClick={() => setIsDarkMode(!isDarkMode)}>
          <span className="theme-icon">🌙</span>
          <span className="theme-icon">☀️</span>
          <div className="theme-switch-ball"></div>
        </div>
      </div>

      {/* --- 右上のAboutメニュー構造 --- */}
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
