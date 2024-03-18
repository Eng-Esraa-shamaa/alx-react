import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App";
import { createRoot } from 'react-dom/client';


{/*ReactDOM.render(*/}
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);