import React from 'react';

import JournalList from "../../components/JournalList";
import JournalListItem from "../../components/JournalListItem";
import JournalSearch from "../../components/JournalSearch";
import { Header, Main } from "../../components/Layout";
import { withChildren } from "../../components/Layout/helpers";

import { updateStateBySearchResponse } from "./helpers";
import { search } from "../../services/hackernews/api";

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
                <Header>
                    <JournalSearch/>
                </Header>
                <Main apologies={ apologies }>
                    <JournalListWithChildren>{ journalListItems }</JournalListWithChildren>
                </Main>
            </div>
        );
    }

}

export default Home;
