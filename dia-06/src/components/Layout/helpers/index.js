import React from "react";

export const withChildren = Component => ( { children, ...rest } ) => {
    return ( children && children.length > 0 )
        ? <Component { ...rest }>{ children }</Component>
        : null;
};
