import React from 'react';

const a = 5;
const b = 148;

function somma(a, b) {
    const result = a + b;
    return (
        <>
        <h2>{result}</h2>
        </>
    )
}

export const element = somma(a, b) 
