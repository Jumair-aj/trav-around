import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { FirebaseContext } from './store/Context';
// import firebase from './Firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <FirebaseContext.Provider value={firebase}>
    <App/>
// </FirebaseContext.Provider>
);
