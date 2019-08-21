import React from 'react';

import { Title } from "./partials";
import { Meta } from "./partials";
import { Dismiss } from "./partials";
import './index.css';

const JournalListGroupItem = ( { item } ) => {
    return (
        <div className="list-group-item">
            <Title item={ item }/>
            <Meta item={ item }>
                <Dismiss/>
            </Meta>
        </div>
    );
};

export default JournalListGroupItem;
