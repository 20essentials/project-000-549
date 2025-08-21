import React from 'react';
import { createRoot } from 'react-dom/client';
import { setup, tw } from 'twind';

setup({});

const App = () => {
  return (
    <div
      className={tw`
        h-screen
        w-full
        bg-[url('assets/bg.svg')]
        bg-[length:100px]
        bg-top
        overflow-hidden
      `}
    ></div>
  );
};

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
