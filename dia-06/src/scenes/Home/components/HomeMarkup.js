import React from 'react';

import JournalList from "../../../components/JournalList";
import JournalListItem from "../../../components/JournalListItem";
import JournalSearch from "../../../components/JournalSearch";
import LayoutHeader from "../../../components/LayoutHeader";
import LayoutMain from "../../../components/LayoutMain";
import { withChildren } from "../../../utility/helpers";

const JournalListWithChildren = withChildren( JournalList );

const HomeMarkup = ( { title, apologies, searchHits } ) => (
    <div>
        <LayoutHeader title={ title }>
            <JournalSearch/>
        </LayoutHeader>
        <LayoutMain apologies={ apologies }>
            <JournalListWithChildren>

                {
                    searchHits.map( item => (
                        <JournalListItem key={ item.objectID } item={ item }/>
                    ) )
                }

            </JournalListWithChildren>
        </LayoutMain>
    </div>
);

export default HomeMarkup;
