import React, { useEffect } from 'react';

export const CongratulationsMessage = ({ threshold, onHide }) => {
    useEffect(() => {
        return () => console.log('CongratulationsMessage unmounting!');
    }, []);

    return (
       <>
           <h1>Congratulations! You've reached {threshold} number of clicks!</h1>
           <button onClick={onHide}>Hide</button>
       </>
    );
}
