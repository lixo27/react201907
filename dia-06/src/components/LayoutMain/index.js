import React from 'react';

import Alert from "./components/Alert";
import Container from "./components/Container";
import { withChildren } from "../../utility/helpers";

const AlertWithChildren = withChildren( Alert );

const LayoutMain = ( { apologies, children } ) => (
    <Container>
        <AlertWithChildren>{ apologies }</AlertWithChildren>
        { children }
    </Container>
);

export default LayoutMain;
