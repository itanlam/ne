import React from 'react';
import { MainView } from './Main';

const Overview = props => {
    return (
        <>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <MainView />
        </>
    );
};

export default Overview;