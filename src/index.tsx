import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import '@natscale/react-calendar/dist/main.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'suneditor/dist/css/suneditor.min.css';

import { store } from 'src/store';

import 'src/styles/index.css';

import App from 'src/modules/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
