import React from 'react';

const NavBar = props => {
    const { children } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">{ children }</div>
        </nav>
    );
};

export default NavBar;
