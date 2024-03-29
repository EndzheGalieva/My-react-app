import React, { useEffect } from 'react';
import { DangerButton } from './Button';

export const CounterButton = ({ onIncrement, numberOfClicks = 0 }) => {
    useEffect(() => {
        console.log('useEffect function called!');
    }, []);

    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <DangerButton onClick={onIncrement}>Click Me!</DangerButton>
        </>
    );
}
