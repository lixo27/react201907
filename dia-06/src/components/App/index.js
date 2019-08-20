import React from 'react';

import {
    doSearch,
    updateStateBySearchResponse
} from './helpers';

import NavBar from "../NavBar";
import NavBarBrand from "../NavBarBrand";

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
            <NavBar>
                <NavBarBrand>Hackernews!</NavBarBrand>
            </NavBar>
        );
    }

}

export default App;
