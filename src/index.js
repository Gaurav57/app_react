import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import RegistrationProcess from './loginProcess/registrationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    
      <Router>
          <Routes>
              <Route
                  path="/"
                  element={<App />}
              />

              <Route
                  path="/register"
                  element={<RegistrationProcess/>}
              />
          </Routes>
      </Router>
    

);






