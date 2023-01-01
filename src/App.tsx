import React, { useState } from 'react';
import './App.css';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="App">
      <div className="container mx-auto px-3">
        <header className="flex justify-between py-3">
          <h1>ロゴ</h1>

          {/* humbergerbutton */}
          <button onClick={handleMenuOpen} type="button" className="z-10 space-y-2">
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'opacity-0 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
          </button>

          {/* nav */}
          <nav
            className={
              openMenu
                ? 'text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300'
                : 'fixed right-[-100%] ease-linear duration-300'
            }
          >
            <ul>
              <li>
                <a href="https://okalog.info">ABOUT</a>
                <a href="https://okalog.info">WORKS</a>
                <a href="https://okalog.info">PEOPLE</a>
                <a href="https://okalog.info">CONTACT</a>
              </li>
            </ul>
          </nav>
        </header>
        <h1>This is a sample for Drawer menu with React/Tailwind</h1>
      </div>
    </div>
  );
}

export default App;
