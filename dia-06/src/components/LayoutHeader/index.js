import React from 'react';

import NavBar from "./components/NavBar";
import NavBarBrand from "./components/NavBarBrand";

const LayoutHeader = ( { title, children } ) => (
    <NavBar>
        <NavBarBrand title={ title }/>
        { children }
    </NavBar>
);

export default LayoutHeader;
