import React from 'react';

import { doSearch } from './helpers';
import { updateStateBySearchResponse } from './helpers';

import ApologizeAlert from "../Alert/Apologize";
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
                    <ApologizeAlert apologies={ apologies }/>
                    <JournalListGroup>{ journalItems }</JournalListGroup>
                </Container>
            </div>
        );
    }

}

export default App;
