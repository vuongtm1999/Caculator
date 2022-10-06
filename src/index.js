import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// console.log(<App vuongprops="CC" onclick="Click">
// <ul><li>Chilren</li></ul>
// <a href='ádasdas'></a>
// </App>)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);

root.render(<App />);

registerServiceWorker();
