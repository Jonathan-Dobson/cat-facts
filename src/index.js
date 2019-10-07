import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import CatProvider from './Context';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/styles.css';

ReactDOM.render(
    
    <CatProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CatProvider>
    
    , document.getElementById('root'));
