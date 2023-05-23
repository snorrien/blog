import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navigation/Navbar';
import AboutPage from './components/AboutPage/AboutPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="bg-secondary vh-100" > 
      <header>
        <Navbar />
        </header>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<MainPage />}/>
          <Route path='/aboutpage' element={<AboutPage/>}/>
          <Route path='/detailspage' element={<DetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
