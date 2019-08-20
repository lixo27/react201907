import React from 'react';

const NavBarBrand = props => {
    const { children } = props;

    return (
        <a href="/" className="navbar-brand">{ children }</a>
    );
};

export default NavBarBrand;
