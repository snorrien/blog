import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navigation/Navbar';
import AboutPage from './components/AboutPage/AboutPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {

  return (
    <Container fluid className="app-container p-0">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/details' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
