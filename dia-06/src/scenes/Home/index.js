import React from 'react';

import { search } from "../../services/hackernews/api";
import { updateStateBySearchResponse, withChildren } from "./helpers";

import Alert from "./components/Alert";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import NavBarBrand from "./components/NavBarBrand";
import JournalList from "../../components/JournalList";
import JournalListItem from "../../components/JournalListItem";
import JournalSearch from "../../components/JournalSearch";

const AlertWithChildren = withChildren( Alert );
const JournalListWithChildren = withChildren( JournalList );

class Home extends React.Component {

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

        const journalListItems = searchHits.map( item => (
            <JournalListItem key={ item.objectID } item={ item }/>
        ) );

        return (
            <div>
                <NavBar>
                    <NavBarBrand>Hackernews!</NavBarBrand>
                    <JournalSearch/>
                </NavBar>
                <Container>
                    <AlertWithChildren>{ apologies }</AlertWithChildren>
                    <JournalListWithChildren>{ journalListItems }</JournalListWithChildren>
                </Container>
            </div>
        );
    }

}

export default Home;
