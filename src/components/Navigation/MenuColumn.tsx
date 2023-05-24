import React from 'react';

const MenuColumn = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <img src="imgs/woman.png" alt="avatar" />
                <p>text</p>
            </div>
            <div className="nav flex-column">
                <a className="nav-link" href="/">List of posts</a>
                <a className="nav-link" href="/aboutpage">About me</a>
            </div>
        </div>
    );
}

export default MenuColumn;