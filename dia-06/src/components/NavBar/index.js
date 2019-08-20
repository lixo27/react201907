import React from 'react';

const NavBar = props => {
    const { children } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            { children }
        </nav>
    );
};

export default NavBar;
