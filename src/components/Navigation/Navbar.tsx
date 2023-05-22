import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu((prevState) => !prevState);
    };

    return (
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>

            <Container fluid>
                <Row>
                    {showMenu && (
                        <Col sm={3} className="bg-light">
                            <div className="d-flex align-items-center">
                                <img src="imgs/woman.png" alt="avatar" />
                                <p>text</p>
                            </div>
                            <div className="nav flex-column">
                                <a className="nav-link" href="/">List of posts</a>

                                <a className="nav-link" href="/aboutpage">About me</a>
                            </div>
                        </Col>
                    )}

                    <Col sm={showMenu ? 9 : 12}>
                        {/* Здесь размещается остальной контент страницы */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



export default Navbar;