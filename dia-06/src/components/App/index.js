import React from 'react';

import ApologizeAlert from "../Alert/Apologize";
import Container from "../Container";
import JournalListGroup from "../ListGroup/Journal";
import JournalListGroupItem from "../ListGroupItem/Journal";
import NavBar from "../NavBar";
import NavBarBrand from "../NavBar/Brand";
import NavBarSearch from "../NavBar/Search";

import { updateStateBySearchResponse } from './helpers';
import { withChildren } from './helpers';

import hackernews from "../../services/hackernews/api";

const ApologizeAlertWithChildren = withChildren( ApologizeAlert );
const JournalListGroupWithChildren = withChildren( JournalListGroup );

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
        const { searchQuery } = this.state;

        const response = await hackernews.search( searchQuery );
        this.setState( updateStateBySearchResponse( response ) );
    }

    render() {
        const { apologies, searchHits } = this.state;

        return (
            <div>
                <NavBar>
                    <NavBarBrand>Hackernews!</NavBarBrand>
                    <NavBarSearch/>
                </NavBar>
                <Container>
                    <ApologizeAlertWithChildren>
                        { apologies }
                    </ApologizeAlertWithChildren>
                    <JournalListGroupWithChildren>
                        { searchHits.map( item =>
                            <JournalListGroupItem key={ item.objectID } item={ item }/>
                        ) }
                    </JournalListGroupWithChildren>
                </Container>
            </div>
        );
    }

}

export default App;
