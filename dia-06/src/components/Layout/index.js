import React from 'react';

import Container from "./components/Container";
import NavBar from "./components/NavBar";
import NavBarBrand from "./components/NavBarBrand";

export const Header = ( { children } ) => (
    <NavBar>
        <NavBarBrand/>
        { children }
    </NavBar>
);

export const Main = ( { children } ) => (
    <Container>
        { children }
    </Container>
);
