import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from "./Main";
import Carrer from './Carrer'
import Technical from './Technical'
import Experience from './Experience'
import Education from './Education'
import About from './About'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/main" element={<Main/>}/>
    <Route path='/Carrer' element={<Carrer/>}/>
    <Route path='/Technical' element={<Technical/>}/>
    <Route path='/Experience' element={<Experience/>}/>
    <Route path='/Education' element={<Education/>}/>
    <Route path='/About' element={<About/>}/>
    </Routes></BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
