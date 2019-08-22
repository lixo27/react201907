import React from 'react';

import { search } from "../../services/hackernews/api";
import { updateStateBySearchResponse, withChildren } from "./helpers";

import ApologizeAlert from "../ApologizeAlert";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import NavBarBrand from "./components/NavBarBrand";
import JournalList from "../JournalList";
import JournalSearch from "../JournalSearch";
import JournalListGroupItem from "../ListGroupItem/Journal";

const ApologizeAlertWithChildren = withChildren( ApologizeAlert );
const JournalListWithChildren = withChildren( JournalList );

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
                    <JournalListWithChildren>
                        { searchHits.map( item =>
                            <JournalListGroupItem key={ item.objectID } item={ item }/>
                        ) }
                    </JournalListWithChildren>
                </Container>
            </div>
        );
    }

}

export default App;
