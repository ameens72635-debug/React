import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Data, { Refer } from './Hooks&Forms.jsx'; // import both

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Data />
      <Refer />
    </div>
  </StrictMode>,
);
