import React from 'react';

import {
    doSearch,
    updateStateBySearchResponse
} from './helpers';

import AlertWarning from "../Alert/Warning";
import Container from "../Container";
import NavBar from "../NavBar";
import NavBarBrand from "../NavBar/Brand";
import NavBarSearch from "../NavBar/Search";

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
        return (
            <div>
                <NavBar>
                    <NavBarBrand>Hackernews!</NavBarBrand>
                    <NavBarSearch/>
                </NavBar>
                <Container>
                    <AlertWarning>
                        Apologies, but no entries were found.
                    </AlertWarning>
                </Container>
            </div>
        );
    }

}

export default App;
