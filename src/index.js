import React from 'react';
import ReactDom from 'react-dom';
// to be able to provide our store to app 
import { Provider } from 'react-redux';
import App from './app.js';

// import './app.scss';

// Import store 

function Entry() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const rootPoint = document.getElementById('root');
ReactDom.render(<Entry />, rootPoint);