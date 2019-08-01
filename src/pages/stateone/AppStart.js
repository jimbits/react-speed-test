import React from 'react';
import {  StateProvider } from './Context';
import Parent from './Parent';

const AppStart = () => {
    return (
        <StateProvider>
            <Parent/>
        </StateProvider>
    );
}

export default AppStart;