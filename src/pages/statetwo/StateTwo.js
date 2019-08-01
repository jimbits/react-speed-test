import React from 'react';
import {  StateProvider } from './Context';
import Parent from './Parent';

const StateTwo = () => {
    return (
        <StateProvider>
            <Parent/>
        </StateProvider>
    );
}

export default StateTwo;