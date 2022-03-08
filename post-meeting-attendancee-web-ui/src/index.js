import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout/Layout'
import './assets/css/index.css'
import './assets/css/grid.css'
import './assets/boxicons-2.1.2/css/boxicons.min.css'

document.title = 'Post Meeting Attendance Report'

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
