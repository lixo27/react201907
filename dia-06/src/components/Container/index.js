import React from 'react';

const Container = props => {
    const { children } = props;

    return (
        <main className="container mt-5">
            { children }
        </main>
    );
};

export default Container;
