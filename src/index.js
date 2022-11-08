require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

//import redux
import { Provider } from 'react-redux'; // it will provide the store to the app
import { store } from './store'; 
import { reducer } from './reducer';


root.render(
<React.StrictMode>
    <>
    {/* <App tab = "home"/> */}
    <Provider store = {store}><App/></Provider>
    </>
</React.StrictMode>
);