import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Updates from './Updates';
import Community from './Community';
import Calls from './Calls';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='maincontainer'>
     <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/Chats" element={<App/>}/>
      <Route path="/Updates" element={<Updates/>}/>
      <Route path="/Calls" element= {<Calls/>}/>
      <Route path='/' element ={<Community/>}/>
    </Routes>
 </BrowserRouter>
  </div>
);


