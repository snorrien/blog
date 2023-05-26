import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import "./Navbar.css"

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-secondary">
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler ms-2"
          type="button"
          onClick={handleShow}>
          <span className="navbar-toggler-icon" ></span>
        </button>
      </nav>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <div className="d-flex flex-column align-items-center pt-3">
            <img src="imgs/woman-big.png" alt="avatar" />
            <h6>Алена Шаповалова</h6>
            <h6>avshapovalova31@gmail.com</h6>
          </div>
          <div className="nav flex-column pt-2">
            <ul className="nav nav-pills flex-column mt-4" >
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <span className="fs-5 ms-3">Список постов</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center" href="/aboutpage">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  <img></img><span className="fs-5 ms-3">Обо мне</span></a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;