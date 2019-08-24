import React from 'react';

import Alert from "./components/Alert";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import NavBarBrand from "./components/NavBarBrand";
import {withChildren} from "../../utility/helpers";

const AlertWithChildren = withChildren( Alert );

export const Header = ( { children } ) => (
    <NavBar>
        <NavBarBrand/>
        { children }
    </NavBar>
);

export const Main = ( { apologies, children } ) => (
    <Container>
        <AlertWithChildren>{ apologies }</AlertWithChildren>
        { children }
    </Container>
);
