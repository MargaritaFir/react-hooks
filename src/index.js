import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App'
import { BrowserRouter,HashRouter} from 'react-router-dom'

const rootElement = document.getElementById('root');
ReactDOM.render(
              <BrowserRouter>
                  <App />
              </BrowserRouter>, rootElement);
