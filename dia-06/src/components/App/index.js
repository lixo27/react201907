import React from 'react';

import { search } from "../../services/hackernews/api";
import { updateStateBySearchResponse, withChildren } from "./helpers";

import ApologizeAlert from "../ApologizeAlert";
import Container from "./components/Container";
import JournalSearch from "../JournalSearch";
import JournalListGroup from "../ListGroup/Journal";
import JournalListGroupItem from "../ListGroupItem/Journal";
import NavBar from "./components/NavBar";
import NavBarBrand from "./components/NavBarBrand";

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

        const response = await search( searchQuery );
        this.setState( updateStateBySearchResponse( response ) );
    }

    render() {
        const { apologies, searchHits } = this.state;

        return (
            <div>
                <NavBar>
                    <NavBarBrand>Hackernews!</NavBarBrand>
                    <JournalSearch/>
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
