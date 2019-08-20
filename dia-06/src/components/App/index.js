import React from 'react';

import {
    doSearch,
    updateStateBySearchResponse
} from './helpers';

class App extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            searchHits: [],
            searchQuery: 'redux',
            searchPage: 0,
        };
    }

    async componentDidMount() {
        const response = await doSearch( this.state );
        this.setState( updateStateBySearchResponse( response ) );
    }

    render() {
        console.log( this.state );

        return (
            <p>hello, hackernews!</p>
        );
    }

}

export default App;
