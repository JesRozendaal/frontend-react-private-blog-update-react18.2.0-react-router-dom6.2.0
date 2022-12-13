import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import ReactDOM from 'react-dom/client';
>>>>>>> 6727a9256316b33d79ed3c200f6002e23413ad2b
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
      <App/>
  </React.StrictMode>
);
>>>>>>> 6727a9256316b33d79ed3c200f6002e23413ad2b
