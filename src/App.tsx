import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navigation/Navbar';
import MenuColumn from './components/Navigation/MenuColumn';
import AboutPage from './components/AboutPage/AboutPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div className="bg-secondary vh-100" >
      <div className="pos-f-t">
        <Navbar toggleMenu={toggleMenu}/>
        <Container fluid>
          <Row>
            {showMenu && (
              <Col sm={3} className="bg-light">
                <MenuColumn/>
              </Col>
            )}
            <Col sm={showMenu ? 9 : 12}>
              <BrowserRouter>
                <Routes >
                  <Route path='/' element={<MainPage />} />
                  <Route path='/aboutpage' element={<AboutPage />} />
                  <Route path='/detailspage' element={<DetailsPage />} />
                </Routes>
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
