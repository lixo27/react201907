import React from 'react';

import {
    doSearch,
    updateStateBySearchResponse,
} from './helpers';

import AlertWarning from "../Alert/Warning";
import Container from "../Container";
import JournalListGroup from "../ListGroup/Journal";
import JournalListGroupItem from "../ListGroupItem/Journal";
import NavBar from "../NavBar";
import NavBarBrand from "../NavBar/Brand";
import NavBarSearch from "../NavBar/Search";

class App extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            apologies: null,
            searchHits: [],
            searchQuery: 'react',
            searchPage: 0,
        };
    }

    async componentDidMount() {
        const response = await doSearch( this.state );
        this.setState( updateStateBySearchResponse( response ) );
    }

    render() {
        const { apologies, searchHits } = this.state;

        const journalItems = searchHits.map( item => {
            return <JournalListGroupItem key={ item.objectID } item={ item }/>;
        } );

        return (
            <div>
                <NavBar>
                    <NavBarBrand>Hackernews!</NavBarBrand>
                    <NavBarSearch/>
                </NavBar>
                <Container>
                    { apologies && <AlertWarning>{ apologies }</AlertWarning> }
                    { journalItems.length > 0 && <JournalListGroup>{ journalItems }</JournalListGroup> }
                </Container>
            </div>
        );
    }

}

export default App;
