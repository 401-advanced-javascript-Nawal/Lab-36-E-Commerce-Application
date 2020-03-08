import React from 'react';
import ReactDom from 'react-dom';
// import './app.scss';
import App from './app.js';

function Entry(){
    return (
        <React.Fragment>
            <App />
        </React.Fragment>
    )
}

const rootPoint = document.getElementById('root');
ReactDom.render(<Entry /> , rootPoint);