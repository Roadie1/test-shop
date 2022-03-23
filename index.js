import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './front.js';

const appRouting = (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" component={App} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.render(appRouting, document.getElementById('root'));
