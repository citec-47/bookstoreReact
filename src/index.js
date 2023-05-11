import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import theStore from './redux/configStore';
import App from './App';

const append = document.querySelector('#root');
const root = createRoot(append);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={theStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
