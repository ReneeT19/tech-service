import React from 'react';
import  ReactDOM from 'react-dom'; //we only need it here to link react app to index.html under public folder
import App from './App';
import './index.css';

//in public folder, index.html has one div with id=root and inside the div tag is where the App goes
//the app component will be rendered inside the div with id of root
ReactDOM.render(<App />, document.getElementById('root'));
 