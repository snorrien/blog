import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navigation/Navbar';
import AboutPage from './components/AboutPage/AboutPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<MainPage />} />
          <Route path='/aboutpage' element={<AboutPage />} />
          <Route path="/details" loader={() => { return 1; }} element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
