import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Render App element to the 'root' element Div
// Using the ReactDOM method
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
