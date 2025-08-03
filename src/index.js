import React, { use } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useContext from 'react';
import { createContext  } from 'react';  
const root = ReactDOM.createRoot(document.getElementById('root'));
// export const CardContext = createContext(0);const CardContextV = [0];
root.render(
  <React.StrictMode>
    {/* <CardContext.Provider value={{CardContextV}}> */}
      <App />
    {/* </CardContext.Provider> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
