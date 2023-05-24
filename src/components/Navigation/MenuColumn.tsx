import React from 'react';

const MenuColumn = () => {
    return (
        <div  className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center pt-3">
                <img src="imgs/woman-big.png" alt="avatar" />
                <h6>Алена Шаповалова</h6>
                <h6>avshapovalova31@gmail.com</h6>
            </div>
            <div className="nav flex-column align-items-center pt-2">
                <a className="nav-link" href="/"><h5>Список постов</h5></a>
                <a className="nav-link" href="/aboutpage"><h5>About me</h5></a>
            </div>
        </div>
    );
}

export default MenuColumn;